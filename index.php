<?php
  function parse_scripts($toJson = false) {
    // scan directory for files matching pattern(s)
    // store filename in object variable
    $cli = [
      'py' => 'python',
      'js' => 'node',
      'php' => 'php'
    ];
    
    $regex = '/Hello World, this is ([\w\s]+) with HNGi7 ID HNG-(\d{5}) using (\w+) for stage 2 task/i';
    $totalResults = [];
    $passCount = 0;
    $failCount = 0;
    $totalCount = 0;
      
    foreach (glob("scripts/*.{js,py,php}", GLOB_BRACE) as $filename) {
      $fileExt = pathinfo($filename, PATHINFO_EXTENSION);
      echo "$fileExt , $filename \n";
      
      $result = new stdClass();

      // for each file, execute the appropriate CLI program
      $output = shell_exec("$cli[$fileExt] $filename");  

      // if success then
      if ($output) {
        // parse output with regex
        $matched = preg_match($regex, $output, $matches);
          // if regex match
          if ($matched) {
            // store fullname in property
            $result->fullname = $matches[1];

            // store ID in property
            $result->id = $matches[2];

            // store language in a property
            $result->language = $matches[3];

            // store passed in property
            $result->passed = true;
            $result->script = $output;

            $passCount += 1;
          }
          else {
          // else
            // store fail for result property   
            $result->passed = false;
            $result->script = $output;
            $failCount += 1;
          }
      }
      else {
        // store fail for result property in object variable
        $result->passed = false;
        $result->script = "Invalid script found - $filename";
        $failCount +=1;
      }

      $totalResults[] = $result;   
      $totalCount += 1;
    }

    if ($toJson) {
      // return json
      $totalResults = json_encode($totalResults, JSON_PRETTY_PRINT);
    }

    $summary->totalResults = $totalResults;
    $summary->passCount = $passCount;
    $summary->failCount = $failCount;
    $summary->totalCount = $totalCount;

    return $summary;
  }

  print_r(parse_scripts());
  
?>
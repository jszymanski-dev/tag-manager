1de
qewe<?php
echo '.;;;;;.';
echo '1lol1231';
echo 'qwe';
echo 'qweqewqweqwe';
//phpinfo();
error_reporting(E_ALL);
ini_set('display_errors', true);

//echo exec("ls -la");
die();


echo 'test';
#
# Last modified: Wed  2 Oct 13:52:03 CEST 2019
#
error_reporting(E_ALL);
ini_set('display_errors', true);
$command = "/usr/local/clean-nginx-cache/run";

if (!is_file($command)) die('[ERROR] Could not find the script: '.$command);

$perm = intval(substr(sprintf('%o', fileperms($command)), -4));
$fileowner = intval(fileowner($command));
$filegroup = intval(filegroup($command));

if ($filegroup == 0) die('[ERROR] Wrong group on the script: '. $command);
if ($fileowner !== 0) die('[ERROR] Wrong owner on the script: '. $command);
if ($perm !== 4550) die('[ERROR] Wrong permissions on the script: '. $command .', found '. $perm);

echo date('[r]').": Clearing cache....<br>";
$output = exec($command);
echo $output;





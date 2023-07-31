<?php

$xml = simplexml_load_file('folkets_sv_en_public.xml') or die("Error: Cannot Open folkets_sv_en_public.xml");

echo $xml->getName();

//$node = $xml->xpath('word[@value = "kärlek"]');
//$node = $xml->xpath('//*[text()[contains(., "kärlek")]]');
$node = $xml->xpath("//text()[contains(translate(.,'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'kärlek')]");



var_dump($node);



?>
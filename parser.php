<?php
require 'engine.php';

if(isset($_POST['source']) && isset($_POST['classname'])) {
    $url = $_POST['source'];
    $classname = $_POST['classname'];

    $e = new engine();

    // $classname = 'js-today_interp_copy';
    // $classname = 'forecast-body clear';

    $doc = new DOMDocument();
    libxml_use_internal_errors(true);

    // $page = $e->get_data_from_url('https://www.tarot.com/daily-horoscope/cancer');
    // $page = $e->get_data_from_url('https://www.tarot.com/horoscopes/april-2018/capricorn');
    //$page = $e->get_data_from_url('https://www.tarot.com/horoscopes/2018/cancer');
    $page = $e->get_data_from_url($url);

    $doc->loadHTML($page);

    $xpath = new DOMXPath($doc);
    $nodes = $xpath->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]");

    $tmpDom = new DOMDocument();
    foreach($nodes as $node){
        $tmpDom->appendChild($tmpDom->importNode($node, true));
    }
    $innerHTML.=trim($tmpDom->saveHTML());
    echo $innerHTML;
}
?>

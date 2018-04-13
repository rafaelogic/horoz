<?php

class engine {

    public function get_data_from_url( $url ){
       $options = array(
           CURLOPT_RETURNTRANSFER => true,     // return web page
           CURLOPT_HEADER         => false,    // don't return headers
           CURLOPT_FOLLOWLOCATION => true,     // follow redirects
           CURLOPT_ENCODING       => "",       // handle all encodings
           CURLOPT_USERAGENT      => "Mv",     // who am i
           CURLOPT_AUTOREFERER    => true,     // set referer on redirect
           CURLOPT_CONNECTTIMEOUT => 120,      // timeout on connect
           CURLOPT_TIMEOUT        => 120,      // timeout on response
           CURLOPT_MAXREDIRS      => 10,       // stop after 10 redirects
           CURLOPT_SSL_VERIFYPEER => false     // Disabled SSL Cert checks
       );
       $page    = curl_init( $url );
       curl_setopt_array( $page, $options );
       $content = curl_exec( $page );
       $err     = curl_errno( $page );
       $errmsg  = curl_error( $page );
       $header  = curl_getinfo( $page );
       curl_close( $page );
       $header['errno']   = $err;
       $header['errmsg']  = $errmsg;
       $header['content'] = $content;
       return $content;
   }
}

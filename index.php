<?php require 'parser.php'; ?>

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta description="Get your daily, monthly, and/or yearly horoscope.">
    <meta name="keywords" content="online horoscope, horoscope online, horoscope, zodiac, astrology" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="author" content="rafaelogic" />
    <meta name="copyright" content="share alike" />
    <meta property="og:site_name" content="Horoz"/>
    <meta property="og:title" content="Horoz by rafaelogic" />
    <meta property="og:description"
          content="Get your daily, monthly, and/or yearly horoscope. It also displays your zodiac sign characteristics." />
    <meta property="fb:app_id" content="848460405244798" />
    <meta property="og:type" content="article" />
    <meta property="article:author" content="https://www.facebook.com/d3vt3c" />

    <title>Horoz by rafaelogic | Horoscope</title>

    <link type="text/css" rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet" href="/css/styles.css" />
</head>
<body>
    <div class="container">
        <div class="text-center header">
            <h1>H o r o z</h1>
            <p class="lead">Your daily, monthly, and yearly horoscope source</p>
            <hr>
        </div>

        <div class="row padder">
            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>ARIES</h1>
                    <p class="lead">MAR 21 - APR 19</p>
                </a>
            </div>
            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>TAURUS</h1>
                    <p class="lead">APR 20 - MAY 20</p>
                </a>
            </div>
            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>GEMINI</h1>
                    <p class="lead">MAY 21 - JUN 20</p>
                </a>
            </div>

            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>CANCER</h1>
                    <p class="lead">JUN 21 - JUL 22</p>
                </a>
            </div>
            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>LEO</h1>
                    <p class="lead">JUL 23 - AUG 22</p>
                </a>
            </div>
            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>VIRGO</h1>
                    <p class="lead">AUG 23 - SEP 22</p>
                </a>
            </div>

            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>LIBRA</h1>
                    <p class="lead">SEP 23 - OCT 22</p>
                </a>
            </div>
            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>SCORPIO</h1>
                    <p class="lead">OCT 23 - NOV 21</p>
                </a>
            </div>
            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>SAGITTARIUS</h1>
                    <p class="lead">NOV 22 - DEC 21</p>
                </a>
            </div>

            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>CAPRICORN</h1>
                    <p class="lead">DEC 22 - JAN 15</p>
                </a>
            </div>
            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>AQUARIUS</h1>
                    <p class="lead">JAN 20 - FEB 18</p>
                </a>
            </div>
            <div class="col-6 col-sm-4 padder">
                <a href="#" class="btn btn-warning btn-block horozInit" data-toggle="modal" data-target="#horozModal">
                    <h1>PISCES</h1>
                    <p class="lead">FEB 19 - MAR 20</p>
                </a>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="horozModal" tabindex="-1" role="dialog" aria-labelledby="horozModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="horozModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div id="horozContent" class="modal-body">

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div><?php //$e = new parser(); print($e->get_horoscope());  ?></div>

        <div class="donate">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="MYYSMD4ZE7EG2">
                <input type="submit" class="btn btn-info" value="Buy me a beer" name="submit" title="PayPal - The safer, easier way to pay online!" class="paypal_btn">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </form>
        </div>

        <hr>
        <footer>
            <p class="text-center">Copyright &copy; 2015-2018 <a href="http://www.rrafael.asia/">rafaelogic</a>. All horoscope are scraped from <a href="http://www.tarot.com/bios/rick-levine">Tarot.com</a></p>
        </footer>
</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
    <script src="/js/scripts.js"></script>
</body>
</html>

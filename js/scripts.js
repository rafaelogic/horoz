$(function() {
    var zodiac = "";

    ajaxLoader();

    $("a.horozInit").on('click', function() {
        zodiac = $(this).children('h1').text();
        loadHoroz(zodiac);
    });


    $(document).on('change', "#horozInfoType input:radio:checked", function(e) {
        e.preventDefault();
        var type = $("#horozInfoType input:radio:checked").val();

        switch (type) {
            case 'info':
                loadHoroz(zodiac);
            break;
            case 'daily':
                var url = "https://www.tarot.com/daily-horoscope/";
                var classname = "js-today_interp_copy";
                getHoroz(url, classname);
            break;

            case 'monthly':
                var year = getYear();
                var month = getMonth();
                var url = `https://www.tarot.com/horoscopes/${month}-${year}/`;
                var classname = "forecast-body clear";
                getHoroz(url, classname);
            break;

            case 'yearly':
                var year = getYear();
                var url = `https://www.tarot.com/horoscopes/${year}/`;
                var classname = "forecast-body clear";
                getHoroz(url, classname);
            break;

            default:
        }
    });

    var loadHoroz = function(zodiac, classname) {
        var zodiac_char = new ZodiacCharacteristics(zodiac);
        $("#horozModalLabel").html(zodiac + ' HOROSCOPE' + utilities.horozToolbar);
        $("#horozContent").html(zodiac_char.description());
    }

    var getHoroz = function(url, classname) {
        $.ajax({
            url: 'parser.php',
            type: 'POSt',
            dataType: 'html',
            data: {source: url + zodiac.toLowerCase(), classname: classname},
            success: function(res) {
                if(res !== ""){
                    $("#horozContent").html(res);
                }else{
                    alert("Error on retrieving horoz, please refresh this page and try again.");
                }
            }
        });
    }

    var getYear = function() {
        var d = new Date();
        var y = d.getFullYear();
        return y;
    }

    var getMonth = function() {
        var d = new Date();
        var m = d.getMonth();

        switch (m) {
            case 0:
                return 'january';
            break;
            case 1:
                return 'february';
            break;
            case 2:
                return 'march';
            break;
            case 3:
                return 'april';
            break;
            case 4:
                return 'may';
            break;
            case 5:
                return 'june';
            break;
            case 6:
                return 'july';
            break;
            case 7:
                return 'august';
            break;
            case 8:
                return 'september';
            break;
            case 9:
                return 'october';
            break;
            case 10:
                return 'november';
            break;
            case 11:
                return 'december';
            break;
            default:
                return 'unknown date';
        }
    }
});


function ajaxLoader()
{
  function ajaxindicatorstart(text)
  {
    if($('body').find('#resultLoading').attr('id') != 'resultLoading'){
      $('body').append('<div id="resultLoading" style="display:none"><div><img src="/img/ripple.svg"><div>'+text+'</div></div><div class="bg"></div></div>');
    }

    $('#resultLoading').css({
      'width':'100%',
      'height':'100%',
      'position':'fixed',
      'z-index':'10000000',
      'top':'0',
      'left':'0',
      'right':'0',
      'bottom':'0',
      'margin':'auto'
    });

    $('#resultLoading .bg').css({
      'background':'#000000',
      'opacity':'0.7',
      'width':'100%',
      'height':'100%',
      'position':'absolute',
      'top':'0'
    });

    $('#resultLoading>div:first').css({
      'width': '250px',
      'height':'75px',
      'text-align': 'center',
      'position': 'fixed',
      'top':'0',
      'left':'0',
      'right':'0',
      'bottom':'0',
      'margin':'auto',
      'font-size':'16px',
      'z-index':'10',
      'color':'#ffffff'

    });

    $('#resultLoading .bg').height('100%');
    $('#resultLoading').fadeIn(300);
    $('body').css('cursor', 'wait');
  }

  function ajaxindicatorstop()
  {
    $('#resultLoading .bg').height('100%');
    $('#resultLoading').fadeOut(300);
    $('body').css('cursor', 'default');
  }

  $(document).ajaxStart(function () {
    //show ajax indicator
    ajaxindicatorstart('palihog paghulat...');
  }).ajaxStop(function () {
    //hide ajax indicator
    ajaxindicatorstop();
  });
}

function gen_loader(elem){
  $(elem).html('<img id="img-loader" alt="" src="/img/ripple.gif" width="25" height="25" align="center" />');
}



class ZodiacCharacteristics {

    constructor(zodiac) {
        this.zodiac = zodiac;
    }

    description() {
        var br = '<br><br>';
        switch (this.zodiac) {
            case 'ARIES':
                return `Aries people are creative, adaptive, and insightful. They can also be strong-willed and spontaneous (sometimes to a fault).${br}Aries people can be driven and are very ambitious often making them over-achievers in anything they set their mind to tackle.${br}Aries are fire signs, and so too is their personality. They may be quick to anger, but don't take it personally, it's just their fiery, passionate personalities showing through.${br}Aries signs have excellent sense of humor, and they get along with almost everyone at the party (and they DO know how to party).${br}Aries can be impatient, but we love them anyway because they are devoted friends, lovers and family members - they are loyal to then end and will fight for their causes (usually supporting the underdog).`;
            break;

            case 'TAURUS':
                return `Taurus zodiac signs and meanings, like the animal that represents them, is all about strength, stamina and will. Stubborn by nature, the Taurus will stand his/her ground to the bitter end (sometimes even irrationally so). But that's okay because the Taurus is also a loving, sympathetic and appreciative sign.${br}The Taurus is very understanding and when we need someone to unburden ourselves to, we often share our deepest fears with the Taurians of the zodiac.${br}Taurians are very patient, practical and efficient, they are excellent in matters of business and are also wonderful instructors/teachers. Although initially they may have their own best interest at heart, they are ultimately & endlessly generous with their time, possessions and love.`;
            break;

            case 'GEMINI':
                return `Flexibility, balance and adaptability are the keywords for the Gemini. They are quick to grasp the meaning of a situation and act on it, often with positive effects. They tend to have a duality to their nature, and can sometimes be tough to predict how they will react. They can turn from hot to cold and may be prone to noticeable mood swings. However, they are generous signs with tendencies of being affectionate, and imaginative. They also inspire others easily as they seem to naturally motivate themselves - their charisma and accomplishments are infectious. Geminians are very supportive, and are especially good at promotions, sales, and driving hard bargains.`;
            break;

            case 'CANCER':
                return `Cancerians love home-life, family and domestic settings. They are traditionalists, and enjoy operating on a fundamental level. They love history, and are fascinated with the beginnings of things (heraldry, ancestry, etc.).${br}The moon is their ruler, so they can be a bit of a contradiction and sometimes moody. However, they are conservative, so they'll be apt to hide their moods from others altogether. They have a reputation for being fickle, but they'll tell you that isn't true, and it's not.${br}Cancerians make loyal, sympathetic friends. However Cancerians need alone time, and when they retreat, let them do so on their terms.`;
            break;

            case 'LEO':
                return `The zodiac signs and meanings of Leo is about expanse, power and exuberance.${br}Leo's are natural born leaders, and they will let you know it as they have a tendency to be high-minded and vocal about their opinions. That's okay, because if you observe, the Leo is usually correct in his/her statements.${br}Leo's have a savvy way of analyzing a situation and executing swift judgment with a beneficial outcome. It comes from being a leader. They are brave, intuitive, and also head-strong and willful. Beneath their dynamic persona lies a generous, loving, sensitive nature that they do not easily share with others.${br}They might be a bit bossy, but those who know them understand this comes from a source need to do good, not (usually) from an inflated ego.`;
            break;

            case 'VIRGO':
                return `Virgo's have keen minds, and are delightful to chat with, often convincing others of outlandish tales with ease and charm. Virgo's are inquisitive and are very skilled at drawing information from people. This trait also makes them naturally intuitive.${br}Combine this with their remarkable memories, and we see an advanced, analytical personality. However the Virgo needs balance in their lives otherwise they may become short-tempered, impatient and self-serving.${br}Virgo's are excellent teammates in work and social activities. They work well with others, although they freely express their opinions (even when unwarranted).`;
            break;

            case 'LIBRA':
                return `As their zodiac signs and meanings would indicate, Libra's are all about balance, justice, equanimity and stability. They easily surround themselves with harmony and beauty, but sometimes go to extremes to do so if their goals are unreasonable or unhealthy.${br}With Venus as their ruling planet, Libra's are very understanding, caring, and often the champion of underdogs. They have keen intuitions, but often don't give themselves enough credit for their perceptions.${br}They can be quiet and shy if not persuaded to come out of their shell. Ironically and in spite of their introverted nature they make excellent debaters, often proving a point from out of seemingly nowhere.`;
            break;

            case 'SCORPIO':
                return `The Scorpio is often misunderstood. These personalities are bold and are capable of executing massive enterprises with cool control and confidence.${br}They can surmount seemingly all obstacles when they put their mind to the task, and they have unshakable focus when the situation calls for it. Regardless of their bold nature, they are often secretive, but they are always observing behind their withdrawn manner.${br}Being associated with a solar animal, (the scorpion) they are not withdrawn for long, and when they come out again they do so with force, vigor and determination.${br}It is true, Scorpio's can be argumentative and pack a powerful sting, but that's simply because they see all opposition as a healthy challenge.`;
            break;

            case 'SAGITTARIUS':
                return `Here we have the philosopher among the zodiac signs and meanings. Like the Scorpio, they have great ability for focus, and can be very intense. However, they must channel their energy or they will waste time and wear themselves out going in too many directions at once.${br}They are not very patient and expect quick results. However, when encountered with failure they make extreme comeback's often against incredible odds.${br}They make loyal friends and lovers, but they do not handle commitment well as they refuse to be tied down while chasing philosophical pursuits.`;
            break;

            case 'CAPRICORN':
                return `Capricorn's are also philosophical signs and are highly intelligent too. They apply their knowledge to practical matters, and strive to maintain stability and order. They are good organizers, and they achieve their goals by purposeful, systematic means. They are very intuitive, although they don't share this trait with others freely. They do not deal well with opposition or criticism but a healthy Capricorn will often shrug off negative comments towards their character.${br}They are patient and persevering - they know they can accomplish any task as long as they follow a their plan step-by-step.${br}Capricorn's have broad shoulders, and typically take on other's problems with aplomb. Ironically, they rarely share their own problems and tend to go through bouts of inner gloom after a spell of dwelling on these problems.`;
            break;

            case 'AQUARIUS':
                return `Often simple and unassuming, the Aquarian goes about accomplishing goals in a quiet, often unorthodox ways. Although their methods may be unorthodox, the results for achievement are surprisingly effective. Aquarian's will take up any cause, and are humanitarians of the zodiac.${br}They are honest, loyal and highly intelligent. They are also easy going and make natural friendships. If not kept in check, the Aquarian can be prone to sloth and laziness.${br}However, they know this about themselves, and try their best to motivate themselves to action. They are also prone to philosophical thoughts, and are often quite artistic and poetic.`;
            break;

            case 'PISCES':
                return `Also unassuming, the Pisces zodiac signs and meanings deal with acquiring vast amounts of knowledge, but you would never know it. They keep an extremely low profile compared to others in the zodiac.${br}They are honest, unselfish, trustworthy and often have quiet dispositions. They can be overcautious and sometimes gullible. These qualities can cause the Pisces to be taken advantage of, which is unfortunate as this sign is beautifully gentle, and generous.${br}In the end, however, the Pisces is often the victor of ill circumstance because of his/her intense determination. They become passionately devoted to a cause - particularly if they are championing for friends or family.`;
            break;

            default:
                return "Zodiac Uknown"

        }
    }

}

var utilities = {
    horozToolbar: `
    <div class="btn-group btn-group-toggle" data-toggle="buttons" id="horozInfoType">
      <label class="btn btn-secondary active" id="horozInfo" >
        <input type="radio" name="options" autocomplete="off" checked value="info"> Info
      </label>
      <label class="btn btn-secondary" id="horozDaily" >
        <input type="radio" name="options"autocomplete="off" value="daily"> Daily
      </label>
      <label class="btn btn-secondary" id="horozMonthly">
        <input type="radio" name="options" autocomplete="off" value="monthly"> Monthly
      </label>
      <label class="btn btn-secondary" id="horozYearly">
        <input type="radio" name="options" autocomplete="off" value="yearly"> Yearly
      </label>
    </div>
    `
}

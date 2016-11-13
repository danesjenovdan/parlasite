function equalHeight($elementByClass) {

    var h = 0;
    $($elementByClass).each(function () {
        if($(this).height() > h){
            h = $(this).height();
        }
    });
    $($elementByClass).height(h);

}

$(function () {

    $(window).resize(function(){
        equalHeight(".session_type");
        equalHeight(".session_types ul li");
    });

    if($(".session_type").length > 0){
        equalHeight(".session_type");
        equalHeight(".session_types ul li");
    }


    $(".searchiconbuttton").click(function () {
        $(".searchiconbuttton").toggle();
        $(".header-searchhide").toggle();
        $(".search-input-header").focus();
        return false;
    });

    $(".search-input-header").blur(function () {
        $(".searchiconbuttton").toggle();
        $(".header-searchhide").toggle();
        return false;
    });







    var mps_search_token = new Bloodhound({
        'datumTokenizer': Bloodhound.tokenizers.obj.whitespace('name'),
        'queryTokenizer': Bloodhound.tokenizers.whitespace,
        'local': mps_data
        // remote: {
        //     url: "/search/autocomplete/",
        //     replace: function(url, query) {
        //         return url + "?q=" + query;
        //     },
        //     filter: function(stocks) {
        //         return $.map(stocks, function(data) {
        //             return {
        //                 tokens: data.tokens,
        //                 symbol: data.symbol,
        //                 name: data.name
        //             }
        //         });
        //     }
        // }
    });

    var ops_search_token = new Bloodhound({
        'datumTokenizer': Bloodhound.tokenizers.obj.whitespace('acronym', 'name'),
        'queryTokenizer': Bloodhound.tokenizers.whitespace,
        'local': ops_data
    });

    var sessionsearch_token = new Bloodhound({
        'datumTokenizer': Bloodhound.tokenizers.obj.whitespace('acronym', 'name'),
        'queryTokenizer': Bloodhound.tokenizers.whitespace,
        'local': sps_data
    });

    function updateHeaderSearch() {
        poeplesearchtypeahead = $('.search-input-header').typeahead({

        }, {
            // 'limit': 3,
            'name': 'poslanci',
            'display': 'name',
            'source': mps_search_token,
            'templates': {
                'empty': '<div class="searchheader">Med poslanci ni zadetkov</div>',
                'suggestion': function(datum) {
                    return '<div class="searchperson-container"><div class="avgminimg img-circle" style="width: 40px; height: 40px; background-image: url(\'https://cdn.parlameter.si/v1/parlassets/img/people/square/' + datum.gov_id + '.png\'); background-size: cover;"></div>' + datum.name + '</div>'
                },
                'header': '<div class="searchheader">POSLANKE IN POSLANCI</div>'
            }
        }, {
            // 'limit': 3,
            'name': 'skupine',
            'display': 'acronym',
            'source': ops_search_token,
            'templates': {
                'empty': '<div class="searchheader">Med PS ni zadetkov</div>',
                'suggestion': function(datum) {
                    return '<div class="searchperson-container"><div class="avgminimg avgminimg-party img-circle" style="width: 40px; height: 40px;"></div>' + datum.acronym + '</div>'
                },
                'header': '<div class="searchheader results">POSLANSKE SKUPINE</div>'
            }
        }, {
            // 'limit': 3,
            'name': 'seje',
            'display': 'acronym',
            'source': sessionsearch_token,
            'templates': {
                'empty': function(val) {
                    return '<div class="session-ac-search" data-query="' + val.query + '"><font><span class="glyphicon glyphicon-search"></span> Išči po transkriptih sej: ' + val.query + '</font></div>';
                },

                'suggestion': function(val) {
                    return '<div class="session-ac-search" data-query="' + val.query + '"><font><span class="glyphicon glyphicon-search"></span> Išči po transkriptih sej: ' + val.query + '</font></div>';
                },
                'header': ''
            }
        });

        $('.search-input-header').bind('typeahead:select', function(e, value) {

            //console.log(value);

            $('.search-input-header').typeahead('close').typeahead('val', '');
        });

        $(".tt-dataset.tt-dataset-seje").on("click", "div", function() {
            window.location.href = "/seje/isci?q=" + $(this).data('query');
            return false;
        });
    }

    updateHeaderSearch();



    function session_search_results() {

        if($("#session_search_results").length < 1){
            return false;
        }

        function getQueryParameters(str) {
            return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
        }
        function encodeQueryData(data) {
            let ret = [];
            for (let d in data)
                ret.push(encodeURIComponent(d) + '/' + encodeURIComponent(data[d]));
            return ret.join('&');
        }


        //var queries = ["raba-skozi-cas", "raba-po-strankah", "najveckrat-so-pojem-uporabili", "nastopi-v-katerih-je-bil-iskalni-niz-izrecen"]

        var queryParams = getQueryParameters();
        var querystring = encodeQueryData(queryParams);

        $("#session_search_results .getmedata").each(function (e, urlid) {

            var urlid = $(this).attr('id');

            $("#"+urlid).html('<div class="nalagalnik">nalagam in čakam na filipa, da naredi loader ... </div>');

            var jqxhr = $.ajax("https://glej.parlameter.si/s/" + urlid + "/?customUrl=https://isci.parlameter.si/"+querystring)
                .done(function (data) {

                    $("#"+urlid).html(data);
                    DNDrepeatEmbedCall();
                })
                .fail(function () {
                    $("#"+urlid).html(urlid + " error");
                })
                .always(function () {
                });

        });
    }
    session_search_results();

});

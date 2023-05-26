!(function (e, n) {
  'use strict'
  function d() {
    'block' == n('#mobile-menu-trigger').css('display')
      ? (n('body').removeClass('is-header-desktop'),
        n('body').addClass('is-header-mobile'))
      : (n('body').addClass('is-header-desktop'),
        n('body').removeClass('is-header-mobile'))
  }
  function l() {
    700 < n(window).height() && 700 < n(window).width()
      ? (n('.level-2-trigger').attr('aria-expanded', 'true'),
        n('.sub-cat').attr('aria-hidden', 'false'),
        n('.level-2-trigger').addClass('expanded'))
      : (n('.level-2-trigger').attr('aria-expanded', 'false'),
        n('.sub-cat').attr('aria-hidden', 'true'),
        n('.level-2-trigger').removeClass('expanded'))
  }
  function o() {
    if (n(window).width() < 961 && 768 < n(window).width()) {
      var e = n('.bd-vertical .layout-right .text-wrapper').height()
      n('.bd-vertical .layout-left').css('max-height', e)
    } else if (960 < n(window).width()) {
      var t = n('.bd-vertical .layout-right').height()
      n('.bd-vertical .layout-left').css('max-height', t)
    }
  }
  n(document).ready(function () {
    var e, t, i, a, s, r
    d(),
      960 < n(window).width() &&
        n('.nav')
          .on('mouseenter focus', '.level-1-trigger', function (e) {
            var t = n(this)
            t.toggleClass('has-focus'),
              t.parents('.has-dropdown-menu').attr('aria-expanded', 'true'),
              t.siblings('.dropdown-menu').attr('aria-hidden', 'false')
          })
          .on('mouseleave blur', '.level-1-trigger', function (e) {
            var t = n(this)
            t.toggleClass('has-focus'),
              setTimeout(function () {
                'true' !==
                  t.siblings('.dropdown-menu').attr('data-has-focus') &&
                  (t
                    .parents('.has-dropdown-menu')
                    .attr('aria-expanded', 'false'),
                  t.siblings('.dropdown-menu').attr('aria-hidden', 'true'))
              }, 100)
          })
          .on('mouseenter focusin', '.dropdown-menu', function (e) {
            var t = n(this)
            t.attr('data-has-focus', 'true'), t.attr('aria-hidden', 'false')
          })
          .on('mouseleave focusout', '.dropdown-menu', function (e) {
            var t = n(this)
            setTimeout(function () {
              0 === t.find(':focus').length &&
                (t.attr('data-has-focus', 'false'),
                t.attr('aria-hidden', 'true'),
                0 === t.siblings('.level-1-trigger.has-focus').length &&
                  (t
                    .parents('.has-dropdown-menu')
                    .attr('aria-expanded', 'false'),
                  t.siblings('.dropdown-menu').attr('aria-hidden', 'true')))
            }, 100)
          }),
      (e = n('#mobile-menu-trigger')),
      (t = n('#header-nav .level-1-trigger')),
      (i = n('#header-nav .level-2-trigger')),
      (a = n('#header-nav .level-3-trigger')),
      e.click(function () {
        'false' == n(this).attr('aria-expanded')
          ? (n('html,body').animate({ scrollTop: 0 }, 0),
            n(this).attr('aria-expanded', 'true'),
            n(this).attr('aria-label', 'Close Menu'),
            n(this).stop().addClass('is-open'),
            n('#header').stop().addClass('is-mobile-open'))
          : (n(this).attr('aria-expanded', 'false'),
            n(this).attr('aria-label', 'Open Menu'),
            n(this).stop().removeClass('is-open'),
            n('#header').stop().removeClass('is-mobile-open'))
      }),
      t.click(function (e) {
        960 < n(window).width() || e.preventDefault(),
          t.parent().removeClass('is-open'),
          'false' == n(this).attr('aria-expanded')
            ? (n(this).attr('aria-expanded', 'true'),
              n(this).parent().addClass('is-open'),
              n(this).siblings('.dropdown-menu').attr('aria-hidden', 'false'),
              n(this)
                .find('.level-1-trigger-icon')
                .stop()
                .addClass('is-active'),
              n(this).next().stop().slideDown(),
              n(window).width() < 961 &&
                (n('.level-1-trigger').not(this).attr('aria-expanded', 'false'),
                n('.level-1-trigger')
                  .not(this)
                  .siblings('.dropdown-menu')
                  .attr('aria-hidden', 'true'),
                n('.level-1-trigger')
                  .not(this)
                  .find('.level-1-trigger-icon')
                  .stop()
                  .removeClass('is-active'),
                n('.level-1-trigger').not(this).next().stop().slideUp(),
                n('.level-1-trigger')
                  .not(this)
                  .next()
                  .find('.sub-cat')
                  .stop()
                  .slideUp(),
                n('.level-1-trigger')
                  .not(this)
                  .next()
                  .find('.sub-cat')
                  .attr('aria-hidden', 'true'),
                n('.level-1-trigger')
                  .not(this)
                  .next()
                  .find('.level-2-trigger')
                  .attr('aria-expanded', 'false'),
                n('.level-1-trigger')
                  .not(this)
                  .next()
                  .find('.level-2-trigger')
                  .removeClass('expanded'),
                n('.level-1-trigger')
                  .not(this)
                  .next()
                  .find('.level-2-trigger-icon')
                  .stop()
                  .removeClass('is-active')))
            : (n(this).attr('aria-expanded', 'false'),
              n(this).parent().removeClass('is-open'),
              n(this).siblings('.dropdown-menu').attr('aria-hidden', 'true'),
              n(this)
                .find('.level-1-trigger-icon')
                .stop()
                .removeClass('is-active'),
              n(this).next().stop().slideUp(),
              n(this).next().find('.sub-cat').stop().slideUp(),
              n(this).next().find('.sub-cat').attr('aria-hidden', 'true'),
              n(this)
                .next()
                .find('.level-2-trigger')
                .attr('aria-expanded', 'false'),
              n(this).next().find('.level-2-trigger').removeClass('expanded'),
              n(this)
                .next()
                .find('.level-2-trigger-icon')
                .stop()
                .removeClass('is-active'))
      }),
      i.click(function () {
        'false' == n(this).attr('aria-expanded')
          ? (n(this).addClass('expanded'),
            n(this).attr('aria-expanded', 'true'),
            n(this).find('.level-2-trigger-icon').addClass('is-active'),
            n(this).next().attr('aria-hidden', 'false'),
            n(this).next().slideDown(),
            n(window).width() < 961 &&
              (n('.level-2-trigger').not(this).attr('aria-expanded', 'false'),
              n('.level-2-trigger').not(this).removeClass('expanded'),
              n('.level-2-trigger')
                .not(this)
                .find('.level-2-trigger-icon')
                .removeClass('is-active'),
              n('.level-2-trigger')
                .not(this)
                .next()
                .attr('aria-hidden', 'true'),
              n('.level-2-trigger').not(this).next().slideUp()))
          : (n(this).removeClass('expanded'),
            n(this).attr('aria-expanded', 'false'),
            n(this).find('.level-2-trigger-icon').removeClass('is-active'),
            n(this).next().attr('aria-hidden', 'true'),
            n(this).next().slideUp())
      }),
      a.click(function () {
        'false' == n(this).attr('aria-expanded')
          ? (n(this).addClass('expanded'),
            n(this).attr('aria-expanded', 'true'),
            n(this).find('.level-3-trigger-icon').addClass('is-active'),
            n(this).next().attr('aria-hidden', 'false'),
            n(this).next().slideDown(),
            n(window).width() < 961 &&
              (n('.level-3-trigger').not(this).attr('aria-expanded', 'false'),
              n('.level-3-trigger').not(this).removeClass('expanded'),
              n('.level-3-trigger')
                .not(this)
                .find('.level-3-trigger-icon')
                .removeClass('is-active'),
              n('.level-3-trigger')
                .not(this)
                .next()
                .attr('aria-hidden', 'true'),
              n('.level-3-trigger').not(this).next().slideUp()))
          : (n(this).removeClass('expanded'),
            n(this).attr('aria-expanded', 'false'),
            n(this).find('.level-3-trigger-icon').removeClass('is-active'),
            n(this).next().attr('aria-hidden', 'true'),
            n(this).next().slideUp())
      }),
      n('.level-1-trigger-no-landing').click(function (e) {
        e.preventDefault()
      }),
      l(),
      n('.summary-expand').click(function () {
        'false' == n(this).attr('aria-expanded')
          ? (n(this).attr('aria-expanded', 'true'),
            n(this).text('read less'),
            n(this).prev('.expand').attr('aria-hidden', 'false'))
          : (n(this).attr('aria-expanded', 'false'),
            n(this).text('read more'),
            n(this).prev('.expand').attr('aria-hidden', 'true'))
      }),
      n('body').hasClass('home') &&
        600 < n(window).width() &&
        (n('.bc-box').on('mouseenter focus', function (e) {
          n(this)
            .find('.reveal')
            .slideDown(200)
            .animate({ opacity: 1 }, { queue: !1, duration: '500' })
        }),
        n('.bc-box').on('mouseleave blur', function (e) {
          n(this)
            .find('.reveal')
            .slideUp(200)
            .animate({ opacity: 0 }, { queue: !1, duration: '500' })
        }),
        n('.bc-box').on('mouseenter focusin', function (e) {
          n(this)
            .find('.reveal')
            .slideDown(200)
            .animate({ opacity: 1 }, { queue: !1, duration: '500' })
        }),
        n('.bc-box').on('mouseleave focusout', function (e) {
          n(this)
            .find('.reveal')
            .slideUp(200)
            .animate({ opacity: 0 }, { queue: !1, duration: '500' })
        })),
      n('body').hasClass('business') &&
        (n('.gallery a').on('mouseenter focus', function (e) {
          n('.gallery a').not(this).stop(!0).addClass('inactive')
        }),
        n('.gallery a').on('mouseleave blur', function (e) {
          n('.gallery a').not(this).stop(!0).removeClass('inactive')
        }),
        n('.expand-trigger').click(function () {
          n('.text').addClass('expanded'), n('.hide-trigger').focus()
        }),
        n('.hide-trigger').click(function () {
          n('.text').removeClass('expanded'), n('.expand-trigger').focus()
        }),
        o(),
        (s = n('.bd-horizontal .layout-right .text-wrapper').height()),
        n('.bd-horizontal .layout-left').css('max-height', s),
        n('.gallery-wrapper').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: !0,
          dots: !1,
          infinite: !0,
          responsive: [{ breakpoint: 600, settings: { slidesToShow: 2 } }],
        }),
        n('a.gallery-image').featherlightGallery({}),
        n('.gallery-trigger-button').click(function () {
          n('.gallery a:first').click()
        })),
      n('body').hasClass('timeline') &&
        (n('.tab-trigger').click(function () {
          n('.tab-trigger').not(this).attr('aria-selected', 'false'),
            n(this).attr('aria-selected', 'true')
          var e = n(this).attr('aria-controls')
          n('.tab-panel')
            .not('#' + e)
            .attr('aria-hidden', 'true'),
            n('#' + e).attr('aria-hidden', 'false')
        }),
        n('.tab-trigger').keypress(function (e) {
          var t = e.which
          if (13 == t) {
            n('.tab-trigger').not(this).attr('aria-selected', 'false'),
              n(this).attr('aria-selected', 'true')
            var i = n(this).attr('aria-controls')
            n('.tab-panel')
              .not('#' + i)
              .attr('aria-hidden', 'true'),
              n('#' + i).attr('aria-hidden', 'false')
          }
        })),
      n('body').hasClass('has-insta-carousel') &&
        (function () {
          var e = n('.insta-feed'),
            i = n('#insta-feed1'),
            a = n('#insta-feed2')
          e.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: !1,
            dots: !1,
            infinite: !1,
            responsive: [
              { breakpoint: 768, settings: { slidesToShow: 4 } },
              { breakpoint: 600, settings: { slidesToShow: 3 } },
              { breakpoint: 450, settings: { slidesToShow: 2 } },
            ],
          })
          var t = e.slick('getSlick').slideCount
          if (768 < n(window).width()) var s = t - 5
          else if (n(window).width() < 769 && 600 < n(window).width())
            var s = t - 4
          else if (n(window).width() < 601 && 450 < n(window).width())
            var s = t - 3
          else if (n(window).width() < 451) var s = t - 2
          n('#slider1').slider({
            min: 0,
            max: s,
            slide: function (e, t) {
              i.slick('getSlick')
              i.slick('goTo', t.value)
            },
          }),
            n('#slider2').slider({
              min: 0,
              max: s,
              slide: function (e, t) {
                a.slick('getSlick')
                a.slick('goTo', t.value)
              },
            })
        })(),
      n('body').hasClass('leadership') &&
        n('.leadership-gallery').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !0,
          dots: !1,
          infinite: !0,
        }),
      n('body').hasClass('has-image-slider') &&
        n('.large-image-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !0,
          dots: !1,
          infinite: !0,
        }),
      n('body').hasClass('awards') &&
        n('.tab').click(function () {
          n(this).addClass('active'),
            n(this).attr('aria-selected', 'true'),
            n('.tab').not(this).removeClass('active'),
            n('.tab').not(this).attr('aria-selected', 'false')
          var e = n(this).attr('aria-controls'),
            t = '#' + e
          n(t).addClass('active'),
            n(t).attr('aria-hidden', 'false'),
            n('.tabs-page')
              .not('#' + e)
              .removeClass('active'),
            n('.tabs-page')
              .not('#' + e)
              .attr('aria-hidden', 'true')
        }),
      navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
        ((r = n('.box-columns.mobile')),
        600 < n(window).width()
          ? r.innerHeight(iosInnerHeight() - 208 + 'px')
          : r.innerHeight(iosInnerHeight() - 183 + 'px')),
      n('.tooltip').tooltipster({ maxWidth: 500 }),
      n('.speedbump').click(function (e) {
        var t = n(this).attr('data-speedbump')
        confirm(t) || e.preventDefault()
      })
  }),
    n(window).resize(function () {
      d(), l(), n('body').hasClass('business') && o()
    })
})(window, jQuery)
//# sourceMappingURL=maps/site.js.map

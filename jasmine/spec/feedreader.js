/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    /*  This suite is all about the RSS
     *   feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* it tests to make sure that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* it tests each feed.Url is defined */
        it('allFeeds and url property is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
            });
        });

        /* it tests each feed.Url is not Emplty*/
        it('allFeeds url property is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
        });
        /* it tests each feed.name is defined */
        it('allFeeds name property is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
            });
        });

        /* it tests each feed.name is defined */
        it('allFeeds name property is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            });
        });
    });


    /*  This suite is all about the Menu
     *   feeds definition,menu diplay when loaded page and button toggle .
     */
    describe('The Menu', function() {
        var body = $('body'),
            btn = $('.icon-list');

        /* it tests to make sure that the allFeeds variable has been defined */
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* it tests to make sure Menu is not on display whien loaded  */
        it('Menu should be hidden when initiated', function() {
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

        /* it tests to make sure Menu swich display/hidden when button clicked  */
        it('Menu should be switch diplayed/hidden  when button clicked', function() {
            btn.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();
            btn.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });
    });

    /*  This suite is all about Initial Entries
     *   feeds definition,menu Initial Data load
     */
    describe('Initial Entries', function() {
        var content;

        beforeEach( function (done) {
          loadFeed(0,done);
        });

        /* it tests to make sure that the initial feed load is done successfully*/
        it('loadFeed should be called and feed container has at least one child', function() {
            content = $('.feed .entry');
            expect(content.length).toBeGreaterThan(0);
        });

    });

    /*  This suite is all about New Feed Section
     *   feeds definition, feed  daata load
     */
    describe('New Feed Selection', function() {
        var contentOld,contentNew;

        beforeEach(function (done) {
          loadFeed(0, function () {
            contentOld = $('.feed .entry').find('h2').first().text();
            loadFeed(1, function () {
              contentNew = $('.feed .entry').find('h2').first().text();
              done();
            });
          });
        });

        /* it tests to make sure that at feed is loaded and data changed */
        it('Feed Section should be changed after loadFeed run', function() {
          expect(contentOld).not.toEqual(contentNew);
        });

    });

}());

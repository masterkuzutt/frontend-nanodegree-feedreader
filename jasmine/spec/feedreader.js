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
        var content = $('.feed');


        /* it tests to make sure that the allFeeds variable has been defined */
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        beforeEach(function(done) {
            setTimeout(function() {
                spyOn(window, 'loadFeed').and.callThrough();
                loadFeed(0, done);
            }, 1000);
        });


        /* it tests to make sure that the initial feed load is done successfully*/

        it('loadFeed should be called and feed container has atleast one child', function(done) {
            expect(window.loadFeed).toHaveBeenCalled();
            expect(content.children().length).toBeGreaterThan(0);
            done();
        });

    });

    /*  This suite is all about New Feed Section
     *   feeds definition, feed  daata load
     */
    describe('New Feed Selection', function() {
        var content = $('.feed'),
            oldFeedElement;

        /* it tests to make sure that the allFeeds variable has been defined */
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        beforeEach(function(done) {
            setTimeout(function() {
                spyOn(window, 'loadFeed').and.callThrough();
                loadFeed(0, done);
                $.extend(oldFeedElement, content.children());
            }, 1000);
        });

        /* it tests to make sure that the all feed is loaded and data changed */
        it('Feed Section should be changed after loadFeed run', function(done) {
            for (var i = 1; i < allFeeds.length; i++) {
                loadFeed(i, done);
                expect(window.loadFeed).toHaveBeenCalled();
                expect(content.children()).not.toEqual(oldFeedElement);
                $.extend(oldFeedElement, content.children());
            }
        });

    });

}());

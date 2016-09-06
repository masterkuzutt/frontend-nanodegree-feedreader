/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('allFeeds and url property is defined' ,function () {
          allFeeds.forEach(function (feed) {
            expect(feed.url).toBeDefined();
          });
         });

         it('allFeeds url property is not empty' ,function () {
            allFeeds.forEach(function (feed) {
              expect(feed.url).toBeTruthy();
            });
         });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('allFeeds name property is defined' ,function () {
          allFeeds.forEach(function (feed) {
            expect(feed.name).toBeDefined();
          });
         });

         it('allFeeds name property is not empty' ,function () {
            allFeeds.forEach(function (feed) {
              expect(feed.name).toBeTruthy();
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
      var body = $('body'),
          btn =  $('.icon-list');

      beforeEach(function() {
        // setUpHTMLFixture();
      });

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */

       it(' should be hidden when initiated',function () {
         expect(body.hasClass('menu-hidden')).toBeTruthy();
       });
       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
       it(' should be switch diplayed/hidden  when button clicked',function () {
         btn.trigger('click');
         expect(body.hasClass('menu-hidden')).toBeFalsy();
         btn.trigger('click');
         expect(body.hasClass('menu-hidden')).toBeTruthy();
       });
     });
    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {
        var content = $('.feed');

        beforeEach(function (done) {
          setTimeout(function () {
            spyOn(window,'loadFeed').and.callThrough();
            loadFeed(0,done);
          },1000);
        })
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
       it('should be called and feed container has atleast one child' ,function (done) {
          expect(window.loadFeed).toHaveBeenCalled();
          expect(content.children().length).toBeGreaterThan(0);
          done();
       });

    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection',function () {
        var content = $('.feed'),
            oldFeedElement;

        beforeEach(function (done) {
          setTimeout(function () {
            spyOn(window,'loadFeed').and.callThrough();
            loadFeed(0,done);
            console.log( JSON.stringify(content.children()));
            console.log( content.children());
            oldFeedElement = content.children();
          },1000);
        })

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
       it('feed should be changed after loadFeed run' ,function (done) {
          loadFeed(1);
          expect(window.loadFeed).toHaveBeenCalled();
          expect(content.children()).not.toEqual(oldFeedElement);
          done();
       });

    });

}());

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    /* A test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* It tests to make sure that the
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


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL defined', function(){
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name defined', function(){
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });

    //A test suite that holds all the tests for menu bar
    describe('The menu', function(){

        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('changes visibility when clicked', function(){
            let menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

    });

    //A test suite to check all initial entries are loaded properly
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('are loaded properly', function(done){
            expect($('.feed').find('.entry').length).not.toBe(0);
            done();
        });
    });

    describe('New feed Selection', function(){
        let feed;
        beforeEach(function(done){
            loadFeed(1, function(){
                done();
            });
            feed = $('.feed').children();
            console.log(feed);
            loadFeed(0,function(){
                done();
            });
        });
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('is working', function(done){
            console.log($('.feed').children());
            expect($('.feed').children()).not.toBe(feed);
            done();
        });
    });
}());

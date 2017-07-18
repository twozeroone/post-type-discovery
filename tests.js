var assert = require('assert');
var getType = require('./index.js');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      getType( '<li class="h-entry post-entry post" id="post-id-5892"> <div class="context"> <div> <i class="ui calendar icon"></i> <a href="http://werd.io/event/51c94deebed7de5c2386a1b4/unofficial-portland-post-indiewebcamp-meetup" class="u-in-reply-to">http://werd.io/event/51c94deebed7de5c2386a1b4/unofficial-portland-post-indiewebcamp-meetup</a> </div></div><div style="" class="content-area has-context has-responses "> <div class="pad"> <data class="p-rsvp ui green right corner label" value="yes"><i class="ui checkmark icon"></i></data><div class="post-text e-content p-name content-type-plain"><a href="https://twitter.com/benwerd">@benwerd</a> Sounds like fun! Im in!</div></div><div class="metaline pad"> <i class="marker icon"></i> <span class="p-location h-card"> <span class="p-name">Portland, OR, USA</span> <data class="p-latitude" value="45.524058"></data> <data class="p-longitude" value="-122.675565"></data> </span> </div><div class="metaline tags pad" style="float: right;"> #<a href="/tag/indiewebcamp" class="p-category">indiewebcamp</a> </div><div class="metaline pad"> <a href="https://aaronparecki.com/2013/06/25/4/indiewebcamp" class="u-url"> <time class="dt-published" datetime="2013-06-25T17:49:55-07:00"> Tue, Jun 25, 2013 5:49pm -07:00 </time> </a> </div><a class="u-author" href="/"></a> <div style="clear:both;"></div></div><div class="responses"> <form class="webmention-form ui form" action="https://webmention.io/aaronpk/webmention" method="post"> <div class="fields"> <div class="twelve wide field"> <label>Have you written a <a href="https://indieweb.org/responses">response</a> to this? Let me know the URL:</label> <input name="source" class="url" type="url"> </div><div class="four wide field"> <label>&nbsp;</label> <input class="ui submit button" value="Send Webmention" type="submit"> </div></div><div class="status hidden"> <div class="ui message"></div></div><input name="target" value="https://aaronparecki.com/2013/06/25/4/indiewebcamp" type="hidden"> </form> </div></li>', function ( type ) {
  assert.equal( type, 'rsvp' );
} );
    });
  });
});

import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
  constructor() {
    //lazy load fix
    this.lazyImages = $(".lazyload");

    //sticky header stuffs
    this.siteHeader = $(".header");
    this.siteContent = $(".header__navbar");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();

    //lazy load call
    this.refreshWaypoints();
  }

  refreshWaypoints(){
    this.lazyImages.on("load", function(){
      Waypoint.refreshAll();
    })
  }// end of refresh waypoints method

  addSmoothScrolling() {
      this.headerLinks.smoothScroll();
  } //end of smooth scroll function

  createHeaderWaypoint() {
    const that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("header--dark");
          that.siteContent.addClass("header__navbar--light");
        } else {
          that.siteHeader.removeClass("header--dark");
          that.siteContent.removeClass("header__navbar--light");
        }
      }
    });
  } // end of create header waypoint function

} // end of sticky header class

export default StickyHeader;

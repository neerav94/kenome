import { Component, OnInit } from '@angular/core';
// import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../css/universal.css', '../../css/color.css'],
  host: {'(window:scroll)': 'track($event)'}
})


export class HomeComponent implements OnInit {

  menuClickedFlag: boolean = false;
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("a.scrollLink").click(function (event) {
        event.preventDefault();
        if(document.getElementById("secondaryHeader").style.display == "flex") {
          $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 20
          }, 500);
        } else {
          $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 160
          }, 500);
        }
      });
    });
  }

  _scrollToDiv(event) {
    var el = document.getElementsByTagName("body")[0] // Or whatever method to get the element

    console.log(el.scrollTop);
    // To set the scroll
    // el.scrollTop = 0;
    // el.scrollLeft = 0;

    // To increment the scroll
    // el.scrollTop = 400;
    // el.scrollLeft += 400;
    console.log(el.scrollTop);
  }

  track(event) {
    var scrollPos = window.pageYOffset;
    var divHeight = $('#home').offset().top;
    if(scrollPos > divHeight) {
      document.getElementById("secondaryHeader").style.display = "flex"
      document.getElementById("mainHeader").style.display = "none"
    } else {
      document.getElementById("secondaryHeader").style.display = "none"
      document.getElementById("mainHeader").style.display = "flex"
    }
  }

  _menuClicked() {
    if(this.menuClickedFlag) {
      this.menuClickedFlag = false;
      document.getElementsByTagName("body")[0].style.overflow = "auto"
    } else {
      this.menuClickedFlag = true;
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
    }
  }

}

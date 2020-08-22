window.onscroll = function () { myFunction() };

var navbar = document.getElementById("main-nav-bar");
var navbar2 = document.getElementById('smallscreen-navbar');
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        //navbar2.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        //navbar2.classList.remove("sticky");
    }
}


// When the page has loaded
function showbody() {
    setTimeout(function () { $('#preloader').hide(); }, 1000);

}

// filter cards 
$('#filterbox').on('keyup',function () {
      //$('.card').show();
      var filter = $(this).val(); // get the value of the input, which we filter on
      $('.container').find(".card-title:not(:contains(" + filter + "))").closest('.card').hide();

      
  }).on('keydown', function(e) {
    if (e.keyCode==8)
    $('.container').find(".card").show();
  });;

  //filter-box 
  function tableFilter(a) {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = a;
    
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    if (a.id == 'myTable2'){
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
    else{
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

//---------- playing project tables 

$('#inputGroupSelect01').on('change', function() {

  switch(this.value) {
    case '1':
      $("#projectTable2015").show();
      $("#projectTable2014").hide();
      break;
    case '2':
      $("#projectTable2014").show();
      $("#projectTable2015").hide();
      break;
      case 'stat-1':
        $("#stat2019-container").show();
        $("#stat2018-container").hide();
        break;
        case 'stat-2':
          $("#stat2018-container").show();
          $("#stat2019-container").hide();
          break;
    default:
      // code block
  }

});

//go top arrow

$(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.go-top').show();
      } else {
          $('.go-top').hide();
      }
  });

  // scroll body to 0px on click
  $('.go-top').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 1600);
      return false;
  });
});
   
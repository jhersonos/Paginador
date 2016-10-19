$(document).ready(function(){
		//pagina inicial
	    var currentPage = 1;
	    //maximo de paginas mostradas
		var itemsPerPage = 5;
		function showPage(page){
		  $("#results .mydata").each(function(i, elem){
		      if(i >= (page-1)*itemsPerPage && i < page*itemsPerPage) //If item is in page, show it
		       {
		       	$(this).show();
		    	$(this).css('display','inline-block')
		    	}
		      else{
		        $(this).hide();
		    	}
		  });
		  $("#currentPage").text(currentPage);
		}
		  showPage(currentPage);
		  $("#next").click(function(){
		     showPage(++currentPage);
		  });
		  $("#prev").click(function(){
		     showPage(--currentPage);
  });
});
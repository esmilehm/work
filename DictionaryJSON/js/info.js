$(window).load(function () {
// $(function(){
	//HTMLを初期化
	var dif1 = $('table.tbl tbody').html("");

	//HTMLを生成
	var dif2 = $.getJSON("json/data.json", function(data){
		$(data.release).each(function(){
			$('<tr>'+
			  '<td>'+this.day+'</td>'+
			  '<td class="labels"><span class="' + this.label + '">' +
			  this.category + '</span></td>'+
			  '<td><a href="' + this.url + '" target="' +
			  this.target + '">' + this.content + '</a></td>'+
			  '<td>11</td>' +
		'</tr>').appendTo('table.tbl tbody').trigger('create');
		})
	})

	//quicksearchの設定 - 上のdif1とdif2の関数が終わってから読み込む -
	$.when(dif1,dif2)
	.done( function(){$('input#id_search').quicksearch('table tbody tr');} )
	//これだけでは、ダメ見たい$('input#id_search').quicksearch('table tbody tr');
});
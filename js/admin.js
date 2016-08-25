// 自适应高度
$("#page-wrapper").css({
	"min-height":$(window).height()
})
// 弹出框
function tipMessage(msg,back){
    $(".modal-body").html(msg);
    $(".comfirm-btn").on("click",back);
}
// checkbox全选或全不选
$(".add-checkbox-btn>label>input").on("click",function(){
    if($(this).prop("checked")){
        $(this).next(".form-group").find("input").prop("checked",'true');
    }else{
        $(this).next(".form-group").find("input").removeAttr("checked");
    }
})

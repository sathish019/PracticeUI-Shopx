var chats = {
  first: "Hello, Welcome to Velocity",
  second: "How may I help you ?",
  third: "Please hold on.."
};

var message = document.getElementById("enter-btn");

var enterKeycount = 0;

console.log(message.value);
message.addEventListener("keydown", function(e) {
  var textBox = message.value;
  console.log(textBox);
  if (e.keyCode === 13) {
    enterKeycount++;
    console.log(enterKeycount);
    if (enterKeycount === 1) {
      $("#chat-messages").append(
        '<div class="dp-flex mg-l-10p mg-t-10p"><div class="circle-34 bg-blue"></div><div class="mg-l-10p border-rad-4p bg-white pd-10 w-32 p-relative"><span class="triangle-right p-absolute bottom-0 left-0"></span>' +
          textBox +
          "</div></div>"
      );
      $("#chat-messages").append(
        '<div class="dp-flex-r-rev mg-r-10p mg-t-10p"><div class="circle-34 bg-blue mg-l-10p"></div><div class="border-rad-4p bg-white pd-10 w-32 p-relative"><span class="triangle-left p-absolute bottom-0 right-0"></span>' +
          chats.first +
          "</div></div>"
      );
    } else if (enterKeycount === 2) {
      $("#chat-messages").append(
        '<div class="dp-flex mg-l-10p mg-t-10p"><div class="circle-34 bg-blue"></div><div class="mg-l-10p border-rad-4p bg-white pd-10 w-32 p-relative"><span class="triangle-right p-absolute bottom-0 left-0"></span>' +
          textBox +
          "</div></div>"
      );
      $("#chat-messages").append(
        '<div class="dp-flex-r-rev mg-r-10p mg-t-10p"><div class="circle-34 bg-blue mg-l-10p"></div><div class="border-rad-4p bg-white pd-10 w-32 p-relative"><span class="triangle-left p-absolute bottom-0 right-0"></span>' +
          chats.second +
          "</div></div>"
      );
    } else if (enterKeycount === 3) {
      $("#chat-messages").append(
        '<div class="dp-flex mg-l-10p mg-t-10p"><div class="circle-34 bg-blue"></div><div class="mg-l-10p border-rad-4p bg-white pd-10 w-32 p-relative"><span class="triangle-right p-absolute bottom-0 left-0"></span>' +
          textBox +
          "</div></div>"
      );
      $("#chat-messages").append(
        '<div class="dp-flex-r-rev mg-r-10p mg-t-10p"><div class="circle-34 bg-blue mg-l-10p"></div><div class="border-rad-4p bg-white pd-10 w-32 p-relative"><span class="triangle-left p-absolute bottom-0 right-0"></span>' +
          chats.third +
          "</div></div>"
      );
    }
  }
});

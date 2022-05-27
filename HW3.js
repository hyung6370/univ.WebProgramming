var dDay = new Date("2022-12-25T13:00:00").getTime();   // 목표 날짜 설정

setTimeout(function() {             // setTimeout() 함수 사용하여 처음 출력 시간 표시
  var nDay = new Date().getTime();  // 현재시각을 ms로 변환
  var diffDay = dDay - nDay;    // 목표 날짜 - 현재 시각
  
  var day = Math.ceil(diffDay / (1000 * 60 * 60 * 24));   // ms 단위를 60초 60초 24 시간으로 나눠준다
  var hour = Math.ceil((diffDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // day와 마찬가지로 hour도 계산

  document.getElementById("result").innerHTML = day + " Days and " + hour + " Hours remain to 13:00, 25th December 2022";
}, 1000); // HTML로 출력

clearTimeout(); // setTimeout() 함수로 설정한 타이머를 제거 

setInterval(function() {  // 5분마다 업데이트하게 도와주는 함수
  var nDay = new Date().getTime();  // 위 과정과 동일
  var diffDay = dDay - nDay;
  
  var day = Math.ceil(diffDay / (1000 * 60 * 60 * 24));
  var hour = Math.ceil((diffDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("result").innerHTML = day + " Days and " + hour + " Hours remain to 13:00, 25th December 2022";
}, 300 * 1000); // 5분 마다 업데이트하여 출력


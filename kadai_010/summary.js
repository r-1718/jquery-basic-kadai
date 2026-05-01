$(function() {

  // ① 文字色を変える
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red'); // 好きな色でOK
  });

  // ② 文字内容を変える
  $('#change-text').on('click', function() {
    $('#target').text('Hello！'); // 好きな文章でOK
  });

  // ③ フェードアウト
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  // ④ フェードイン
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });

});
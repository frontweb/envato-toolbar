let $commentsElements = $('.js-comment-reply-form');
for (let i = 0; i < $commentsElements.length; i++) {
    $($commentsElements[i]).prepend(`
<div class="fweb-toolbar">
    <span class="fweb-toolbar__item"><span class="fweb-icon fweb-icon-bold" data-btn-key="bold"></span></span>
    <span class="fweb-toolbar__item"><span class="fweb-icon fweb-icon-italic" data-btn-key="italic"></span></span>
    <span class="fweb-toolbar__item"><span class="fweb-icon fweb-icon-code" data-btn-key="pre"></span></span>
    <span class="fweb-toolbar__item"><span class="fweb-icon fweb-icon-smile"  data-btn-key="emoji-smile"></span></span>
</div>
`);
}

$('.fweb-icon').click(function (ev) {
    let $icon = $(ev.target);
    let btnKey = $icon.data('btn-key');
    let $toolbar = $($icon.closest('.fweb-toolbar')[0]);
    let commentTextArea = $toolbar.parent().find('.js-comment-new-reply-field').get(0);

    let btnKeyToHtml = {
        'bold':        '<strong></strong>',
        'italic':      '<i></i>',
        'pre':         '<pre></pre>',
        'emoji-smile': ':)'
    };
    insertAtCaret(commentTextArea, btnKeyToHtml[btnKey]);
});

function insertAtCaret(txtArea, text) {
    let scrollPos = txtArea.scrollTop;
    let strPos = txtArea.selectionStart;

    let front = (txtArea.value).substring(0, strPos);
    let back = (txtArea.value).substring(strPos, txtArea.value.length);
    txtArea.value = front + text + back;
    strPos = strPos + text.length;
    txtArea.selectionStart = strPos;
    txtArea.selectionEnd = strPos;
    txtArea.focus();

    txtArea.scrollTop = scrollPos;
}

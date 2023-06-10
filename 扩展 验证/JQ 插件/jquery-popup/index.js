(function ($) {
    $.popup = function (options) {
        this.title = options && options.title || '请选择';
        this.okButton = options && options.okButton || '确认';
        this.cancelButton = options && options.cancelButton || '取消';
        this.okCallback = options && options.okCallback || function () {};
        this.cancelCallback = options && options.cancelCallback || function () {};

        const template = `<div id="popup-container">
                            <div class="popup-action">
                                <div class="popup-action-content">
                                    ${this.title}
                                </div>

                                <div class="popup-action-footer">
                                    <button id="popupOk">${this.okButton}</button>
                                    <button id="popupCancel">${this.cancelButton}</button>                
                                </div>
                            </div>
                        </div>`;

        $('body').append(template);
        $('#popupOk').click(() => {
            this.okCallback();
            $('#popup-container').remove();
        });
        $('#popupCancel').click(() => {
            this.cancelCallback();
            $('#popup-container').remove();            
        });        
    }
})(jQuery);
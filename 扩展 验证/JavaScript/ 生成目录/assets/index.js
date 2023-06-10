( function( $ ) {

    function Catalog( element, options ) {
        this.$parentEle = $( element );
        this.$catalog_container = $( "<div>" );
        this.$catalog_title = $( "<h1>" );
        this.$ul_container = $( "<ul>" );
        this.$control_a = $( "<button>" );
        this.titleReg = /^h[1-3]$/;
        this.static = true;
        this.init( this );
    }

    console.log(342);

    Catalog.prototype = {
        init: function( self ) {
            // 组合目录容器和标题等
            self.$catalog_title.text( '目录' );
            self.$catalog_container.attr( "id", "catalog" )
            .append( self.$catalog_title )
            .append( self.$control_a.attr( "class", "control_btn").text( "-" ) );
            // 查找文章中所有的h1、h2、h3标签
            // 生成目录列表插入目录容器中
            self.$parentEle.children().each( function() {
                if( self.titleReg.test( this.tagName.toLowerCase() ) ) {
                    $( this ).append( "<a href='#catalog' class='title_back'> #</a>" );
                    self.$ul_container.append( self.list( this ) );
                }
            } );
            // 替换[TOC]为目录
            $( "#cnblogs_post_body > p" ).eq(0).replaceWith(self.$catalog_container.append(self.$ul_container));

            console.log('init');
            console.log($( "#cnblogs_post_body > p" ).eq(0));
            // 添加目录收缩功能
            $( "#catalog > button" ).on( "click", function() {
                $( "#catalog ul" ).toggle();
                $( event.target ).text( self.static ? "+" : "-" );
                self.static = !self.static;
            } );
        },

        // 生成目录列表函数
        list: function( element ) {
            var aEle = $( "<a></a>" ),
                hEle = $( "<li></li>" );
            aEle.attr( "href", "#" + element.id ).text( element.childNodes[0].nodeValue );
            hEle.attr( "class", element.nodeName.toLowerCase() + "_list" ).append( aEle );
            return hEle;
        },
    };

    $.fn.catalog = function( options ) {
        return this.each( function() {
            if( !$.data( this, 'catalog' ) ) {
                $.data( this, 'catalog', new Catalog( this, options ) );

                console.log(this);
            }
        } );
    }

    // 使用插件
    // $( "#cnblogs_post_body" ).catalog();
    //
    // console.log(3333);

} )( window.jQuery );

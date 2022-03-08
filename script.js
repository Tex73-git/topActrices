$(document).ready(function() {
    // Variables des éléments a selectionner
    let $mainMenuItems = $('#main-menu ul').children('li'),
        totalMainMeniItems = $mainMenuItems.length,
        openedIndex = 2,
        // Initialisation de la Function 
        init = function() {
            bindEvents();
            if(validIndex(openedIndex)) {
                animateItem($mainMenuItems.eq(openedIndex), true, 700);
            }
        },
        bindEvents = function() {
                        // Function click sur image
                        $mainMenuItems.children('.images').click(function(){
                            let newIndex = $(this).parent().index();
                            checkAndAnimateItem(newIndex);
                        });
                        // Function hover sur les boutons
                        $('.button').hover (
                            function() {
                                $(this).addClass('hovered');
                            },
                            function() {
                                $(this).removeClass('hovered');
                            }
                        );
                        // Sélection de l'actrice avec le bouton au click
                        $('.button').click(function(){
                            let newIndex = $(this).index();
                            checkAndAnimateItem(newIndex);
                        });
        },
        // Function qui vérifie si l'index est valide
        validIndex = function(indexToCheck) {
            return (indexToCheck >= 0) && (indexToCheck < totalMainMeniItems);
        },
        // Function qui anime les images
        animateItem = function($item, toOpen, speed) {
            let $colorImage = $item.find('.color'),
            itemParam = toOpen ? {width:'420px'}: {width: '140px'},
            colorImageParam = toOpen ? {left: '0px'}: {left: '140px'};
            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);
        },
        // Function ouverture/fermeture des images
        checkAndAnimateItem = function(indexToCheckAndAnimate) {
            if(openedIndex === indexToCheckAndAnimate) {
                animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            } else {
                if(validIndex(indexToCheckAndAnimate)) {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCheckAndAnimate;
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }
        };
    init();
});
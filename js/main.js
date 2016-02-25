COMPONENT('timer', function() {
    var self = this;

    // Helper variables
    var interval;
    var timer = 0;
    var target;

    // Helper method
    function toggle() {
        if (interval) {
            clearInterval(interval);
            interval = null;
            return;
        }

        interval = setInterval(function() {
            timer++;
            target.html(timer + ' seconds');
        }, 1000);
    };

    self.make = function() {
        self.element.append('<button style="width:100%;height:30px">Run</button>');
        target = self.element.find('button');
        self.element.on('click', 'button', toggle);
        if (self.element.attr('data-autorun') === 'true')
            toggle();
    };
});

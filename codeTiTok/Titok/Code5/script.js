const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

const play = (video) => {
    document.querySelectorAll('video').forEach(v => v.pause());
    video.currentTime -= 0.5;
    video.play();
};

play(document.querySelectorAll('.item')[1]);

$next.addEventListener('click',
    () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
        play(items[2]);
    },
);
$prev.addEventListener(
    'click',
    () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').epend(items[items.length - 1]);
        play(items[0]);
    },
);
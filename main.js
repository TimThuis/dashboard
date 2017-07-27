const dataFlowsTl = new TimelineMax();
const dataFlowChartShowTl = new TimelineMax({
  paused: true,
})
const detailPageTl = new TimelineMax({
  paused: true,
})
const showDetailCardTl = new TimelineMax({
  paused: true,
})


showDetailCardTl.to('.card-test .one', 1, {
  scale: 0.75,
  opacity: 0.75,
}, 'start')
  .to('.card-test .two', 1, {
    x: '0%',
  }, 'start+=0.5')



detailPageTl.to('.flow', 1, {
  x: '-100%',
}, 'start')
  .to('.flow', 0.5, {
    height: 0,
    padding: 0,
  }, 'start+=1')
  .to('.card h2', 0.5, {
    y: '-150%',
    padding: 0,
  }, 'start')
  .to('.card h2', 0.5, {
    opacity: 0,
  }, 'start+=0.5')
  .staggerTo('.card', 0.5, {
    height: '200px',
    padding: 0,
    overflow: 'visible'
  }, 0.25, 'start+=1')
  .to('.card .slide-card', 0.5, {
    height: '100%',
  }, 'start+=1')
  .to('.title h1', 0.5, {
    y: 0
  }, 'start')
  .to('.fa-times', 0.5, {
    opacity: 1,
  }, 'start')
  .to('.card .card-detail', 0.5, {
    opacity: 1,
  }, 'start+=1.5')
  .from('.card .card-detail', 0.25, {
    scale: 0.9,
  }, 'start+=1.5')

dataFlowsTl.staggerFrom('.card', 0.5, {
  x: '100%',
}, 0.1, 'start')
  .staggerFrom('.flow', 0.5, {
    width: 0,
  }, 0.1, 'start+=0.5')
  .staggerFrom('.flow .diff-status-bar', 0.5, {
    width: 0,
  }, 0.1, 'start+=1')
  .staggerFrom('.flow .percent', 0.25, {
    y: '-100%',
  }, 0.1, 'start+=1')
  .staggerFrom('.flow .grow', 0.25, {
    y: '-100%',
  }, 0.1, 'start+=1.25')


function showGraph(el) {
  const statusBar = el.querySelector('.diff-status-bar');

  dataFlowChartShowTl.to(el, 0.5, {
    width: '100%',
  }, 'start')
    .to(statusBar, 0.5, {
      width: '0',
    }, 'start')
    .to('.numbers', 0.5, {
      marginTop: '16px',
    }, 'start+=0.5')
    .to('.graph', 0.5, {
      height: '200px',
    }, 'start+=0.5')
    .to('.flow', 0.5, {
      padding: 0,
    }, 'start+=0.5')
    .to('.graph', 1, {
      width: '100%',
    }, 'start+=1')
    .to('.more', 0.5, {
      y: '0%'
    }, 'start+=2')

  if (el.classList.contains('open')) {
    el.classList.remove('open');
    dataFlowChartShowTl.reverse();
  } else {
    el.classList.add('open');
    dataFlowChartShowTl.play();
  }
}

function showDetailPage() {
  detailPageTl.play();
}

function hideDetailPage() {
  detailPageTl.reverse();
}


function slideCardPlay() {
  showDetailCardTl.play();
}

function slideCardRev() {
  showDetailCardTl.reverse();
}

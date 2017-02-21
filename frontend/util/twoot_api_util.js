export const fetchTwoot = twootId => (
  $.ajax(`/api/twoots/${twootId}`)
);

export const fetchTwoots = () => (
  $.ajax('/api/twoots')
);

export const destroyTwoot = twootId => (
  $.ajax({
    url: `/api/twoots/${twootId}`,
    method: 'delete',
  })
);

export const createTwoot = twoot => (
  $.ajax({
    url: 'api/twoots',
    method: 'post',
    data: { twoot },
  })
);

export const fetchWoot = wootId => (
  $.ajax(`/api/woots/${wootId}`)
);

export const fetchWoots = () => (
  $.ajax('/api/woots')
);

export const destroyWoot = wootId => (
  $.ajax({
    url: `/api/woots/${wootId}`,
    method: 'delete',
  })
);

export const createWoot = woot => (
  $.ajax({
    url: 'api/woots',
    method: 'post',
    data: { woot },
  })
);

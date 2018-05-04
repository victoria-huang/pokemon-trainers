class Adapter {
  constructor(url) {
    this.url = url;
  }

  getResources() {
    return fetch(`${this.url}`).then(r => r.json());
  }

  deleteResource(id) {
    return fetch(`${this.url}/${id}`,{ method: 'DELETE' }).then(r => r.json());
  }
}

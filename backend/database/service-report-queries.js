class ServiceReportQueries {
  constructor(connectionPool) {
    this.connectionPool = connectionPool;
  }

  get pool() {
    return this.connectionPool.getPool();
  }

  save(serviceReport, errorCallback) {
    this.pool.query(
      "insert into service_reports set ?",
      serviceReport,
      errorCallback
    );
  }
  get(id, errorCallback) {
    this.pool.query(
      "select * from service_reports where id = ?",
      id,
      errorCallback
    );
  }

  getAll(errorCallback) {
    this.pool.query("select * from service_reports", errorCallback);
  }

  update(id, serviceReport, errorCallback) {
    // should verify if id is valid
    this.pool.query(
      "update service_reports set ? where id = ?",
      [serviceReport, id],
      errorCallback
    );
  }

  delete(id, errorCallback) {
    this.pool.query(
      "delete from service_reports where id = ?",
      id,
      errorCallback
    );
  }
}

module.exports = ServiceReportQueries;

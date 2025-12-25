class ServiceReport {
  constructor(dbConnectionPool) {
    this.dbConnectionPool = dbConnectionPool;
  }

  save(serviceReport) {
    this.dbConnectionPool
      .getPoolConnection()
      .query(
        "insert into service_reports set ?",
        serviceReport,
        (err, result) => {
          if (err) throw err;
          console.log(result);
        }
      );
  }
  get(id) {
    this.dbConnectionPool
      .getPoolConnection()
      .query(
        "select * from service_reports where id = ?",
        id,
        (err, result) => {
          if (err) throw err;
          console.log(result);
        }
      );
  }
  getAll() {
    this.dbConnectionPool
      .getPoolConnection()
      .query("select * from service_reports", (err, result) => {
        if (err) throw err;
        console.log(result);
      });
  }
  update(id, serviceReport) {
    this.dbConnectionPool
      .getPoolConnection()
      .query(
        "update service_reports set ? where id = ?",
        [serviceReport, id],
        (err, result) => {
          if (err) throw err;
          console.log(result);
        }
      );
  }
  delete(id) {
    this.dbConnectionPool
      .getPoolConnection()
      .query("delete from service_reports where id = ?", id, (err, result) => {
        if (err) throw err;
        console.log(result);
      });
  }
}

module.exports = ServiceReport;

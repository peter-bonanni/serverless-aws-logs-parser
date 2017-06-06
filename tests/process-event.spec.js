"use strict";

const processEvent = require("../src/process-event");
const expect = require("chai").expect;
const events = require("./mocks/events.mock");

describe("process single event", () => {
  describe("API Gateway Successful request", () => {
    let res;
    before(() => {
      res = processEvent("api-gateway", events.api_gateway_succesful_request);
    });
    it("should find the request id", () => {
      expect(res.request_id).to.eql("9ac0eacd-87c5-11e6-b30c-19c3d9849330");
    });
    it("should find the method", () => {
      expect(res.method).to.eql("POST");
    });
    it("should find the request resource path", () => {
      expect(res.resource_path).to.eql("/repos/hello");
    });
    it("should find the response status code", () => {
      expect(res.response_status).to.eql("200");
    });
    it("should find the start ts", () => {
      expect(res.ts_start).to.eql("2016-10-01T10:55:45.602Z");
    });
    it("should find the end ts", () => {
      expect(res.ts_end).to.eql("2016-10-01T10:55:45.697Z");
    });
    it("should find the request query string", () => {
      expect(res.request_query_string).to.eql("q=koa-oop");
    });
    it("should find the request path params", () => {
      expect(res.request_path).to.eql("id=hello");
    });
    it("should find request IP Address", () => {
      expect(res.ip_address).to.eql("199.203.61.109");
    });
  });
  describe("API Gateway Error request", () => {
    let res;
    before(() => {
      res = processEvent("api-gateway", events.api_gateway_error_request);
    });
    it("should find the request id", () => {
      expect(res.request_id).to.eql("9537d573-87c5-11e6-b3e4-6f23bc206746");
    });
    it("should find the method", () => {
      expect(res.method).to.eql("POST");
    });
    it("should find the request resource path", () => {
      expect(res.resource_path).to.eql("/repos/hello");
    });
    it("should find the response status code", () => {
      expect(res.response_status).to.eql("400");
    });
    it("should find the start ts", () => {
      expect(res.ts_start).to.eql("2016-10-01T10:55:36.315Z");
    });
    it("should find the end ts", () => {
      expect(res.ts_end).to.eql("2016-10-01T10:55:36.480Z");
    });
    it("should find the request query string", () => {
      expect(res.request_query_string).to.eql("");
    });
    it("should find the request path params", () => {
      expect(res.request_path).to.eql("id=hello");
    });
  });

  describe("Lambda Event", () => {
    let res;
    before(() => {
      res = processEvent("lambda", events.lambda_event);
    });
    it("should find the request id", () => {
      expect(res.request_id).to.eql("8329c002-87c4-11e6-bbf0-c124e4d39f76");
    });

    it("should find the start ts", () => {
      expect(res.ts_start).to.eql("2016-10-01T10:47:56.545Z");
    });
    it("should find the end ts", () => {
      expect(res.ts_end).to.eql("2016-10-01T10:47:56.920Z");
    });
    it("should find the duration ms", () => {
      expect(res.duration_ms).to.equal("352.40");
    });
    it("should find the billed duration ms", () => {
      expect(res.billed_duration_ms).to.equal("400");
    });
    it("should find the memory size", () => {
      expect(res.memory_size).to.equal("128");
    });
    it("should find the max memory used", () => {
      expect(res.max_memory_used).to.equal("23");
    });
  });
});

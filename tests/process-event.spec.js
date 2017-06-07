"use strict";

const processEvent = require("../src/process-event");
const expect = require("chai").expect;
const events = require("./mocks/events.mock");

describe("process single event", () => {
  describe("API Gateway Successful request No IP", () => {
    let res;
    before(() => {
      res = processEvent(
        "api-gateway",
        events.api_gateway_succesful_request_no_ip
      );
    });
    it("should find the request id", () => {
      expect(res.request_id).to.eql("f4a8e01b-49f6-11e7-8898-f1161a8a9a54");
    });
    it("should find the method", () => {
      expect(res.method).to.eql("GET");
    });
    it("should find the request resource path", () => {
      expect(res.resource_path).to.eql("/all_state");
    });
    it("should find the response status code", () => {
      expect(res.response_status).to.eql("200");
    });
    it("should find the start ts", () => {
      expect(res.ts_start).to.eql("2017-06-05T13:57:47.369Z");
    });
    it("should find the end ts", () => {
      expect(res.ts_end).to.eql("2017-06-05T13:57:47.390Z");
    });
    it("should find the request query string", () => {
      expect(res.request_query_string).to.eql("");
    });
    it("should find the request path params", () => {
      expect(res.request_path).to.eql("resource=all_state");
    });
    it("should find request IP Address", () => {
      expect(res.ip_address).to.eql("0.0.0.0");
    });
  });
  describe("API Gateway Successful request", () => {
    let res;
    before(() => {
      res = processEvent("api-gateway", events.api_gateway_successful_request);
    });
    it("should find the request id", () => {
      expect(res.request_id).to.eql("cf101403-4a17-11e7-935f-35dfc4618b7d");
    });
    it("should find the method", () => {
      expect(res.method).to.eql("GET");
    });
    it("should find the request resource path", () => {
      expect(res.resource_path).to.eql("/user_info");
    });
    it("should find the response status code", () => {
      expect(res.response_status).to.eql("200");
    });
    it("should find the start ts", () => {
      expect(res.ts_start).to.eql("2017-06-05T17:52:57.673Z");
    });
    it("should find the end ts", () => {
      expect(res.ts_end).to.eql("2017-06-05T17:52:57.738Z");
    });
    it("should find the request query string", () => {
      expect(res.request_query_string).to.eql("");
    });
    it("should find the request path params", () => {
      expect(res.request_path).to.eql("resource=user_info");
    });
    it("should find request IP Address", () => {
      expect(res.ip_address).to.eql("89.64.28.236");
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

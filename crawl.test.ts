import { normalizeURL } from "./crawl";
import { test, expect } from "@jest/globals";

test("normalizeURL trailing slash", () => {
  const input = "https://blog.boot.dev/path/";
  const output = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(output).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "https://Blog.boot.dev/path";
  const output = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(output).toEqual(expected);
});

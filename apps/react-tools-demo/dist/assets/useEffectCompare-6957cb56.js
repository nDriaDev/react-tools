const Z="data:text/markdown;base64,IyB1c2VFZmZlY3RDb21wYXJlCkN1c3RvbSB1c2VFZmZlY3QgdGhhdCByZWV4ZWN1dGVzIEVmZmVjdENhbGxiYWNrIG9ubHkgd2hlbiBjb21wYXJhdG9yIGZ1bmN0aW9uLCByZWNlaXZlZCBhcyB0aGlyZCBwYXJhbWV0ZXIsIHJldHVybnMgdHJ1ZS4KCiMjIFVzYWdlCgpgYGB0c3gKY29uc3QgVXNlRWZmZWN0Q29tcGFyZSA9ICgpID0+IHsKCWNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBpZDogMCwgbmFtZTogInN0YXRlIiB9KTsKCWNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoeyBlZmZlY3Q6ICIiLCBlZmZlY3RDb21wYXJlOiAiIiB9KTsKCgl1c2VFZmZlY3QoKCkgPT4gewoJCWNvbnNvbGUubG9nKCJ1c2VFZmZlY3QgZXhlY3V0aW9uLi4iKTsKCQlzZXRNZXNzYWdlcyhtID0+ICh7IC4uLm0sIGVmZmVjdDogYHVzZUVmZmVjdCAtLT4gQ3VycmVudCBzdGF0ZSBpczogaWQ6ICR7c3RhdGUuaWR9IC0gbmFtZTogJHtzdGF0ZS5uYW1lfWAgfSkpOwoJCXJldHVybiAoKSA9PiB7CgkJCWNvbnNvbGUubG9nKCJ1c2VFZmZlY3QgY2xlYW4gdXAgZXhlY3V0aW9uLi4iKTsKCQkJc2V0TWVzc2FnZXMobSA9PiAoeyAuLi5tLCBlZmZlY3Q6ICIiIH0pKTsKCQl9Cgl9LCBbc3RhdGVdKTsKCgl1c2VFZmZlY3RDb21wYXJlKAoJCSgpID0+IHsKCQkJY29uc29sZS5sb2coInVzZUVmZmVjdENvbXBhcmUgZXhlY3V0aW9uLi4iKTsKCQkJc2V0TWVzc2FnZXMobSA9PiAoeyAuLi5tLCBlZmZlY3RDb21wYXJlOiBgdXNlRWZmZWN0Q29tcGFyZSAtLT4gQ3VycmVudCBzdGF0ZSBpczogaWQ6ICR7c3RhdGUuaWR9IC0gbmFtZTogJHtzdGF0ZS5uYW1lfWAgfSkpOwoJCQlyZXR1cm4gKCkgPT4gewoJCQkJY29uc29sZS5sb2coInVzZUVmZmVjdENvbXBhcmUgY2xlYW4gdXAgZXhlY3V0aW9uLi4iKTsKCQkJCXNldE1lc3NhZ2VzKG0gPT4gKHsgLi4ubSwgZWZmZWN0Q29tcGFyZTogIiIgfSkpOwoJCQl9CgkJfSwKCQlbc3RhdGVdLAoJCShvbGREZXBzLCBuZXdEZXBzKSA9PiBvbGREZXBzWzBdLm5hbWUgIT09IG5ld0RlcHNbMF0ubmFtZQoJKTsKCgoJcmV0dXJuICg8PgoJCTxwPkN1cnJlbnQgc3RhdGU6IGlkOiB7c3RhdGUuaWR9IC0gbmFtZToge3N0YXRlLm5hbWV9PC9wPgoJCTxwPnttZXNzYWdlcy5lZmZlY3R9PC9wPgoJCTxwPnttZXNzYWdlcy5lZmZlY3RDb21wYXJlfTwvcD4KCQk8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHQ9PiAoeyAuLi50LCBpZDogdC5pZCsxIH0pKX0+SW5jcmVtZW50PC9idXR0b24+Cgk8Lz4pOwp9OwoKVXNlRWZmZWN0Q29tcGFyZS5kaXNwbGF5TmFtZSA9ICJVc2VFZmZlY3RDb21wYXJlIjsKCmV4cG9ydCB7IFVzZUVmZmVjdENvbXBhcmUgfTsKYGBgCgo+IFRoZSBjb21wb25lbnQgaGFzOgo+IC0gYSBfc3RhdGUgdXNlU3RhdGUgdmFyaWFibGVfIHdpdGggX2lkXyBhbmQgX25hbWVfIHByb3BlcnRpZXMuCj4gLSBhIF9tZXNzYWdlcyB1c2VTdGF0ZSB2YXJpYWJsZV8gd2l0aCBfZWZmZWN0XyBhbmQgX2VmZmVjdENvbXBhcmVfIHByb3BlcnRpZXMgdGhhdCBhcmUgcmVuZGVyZWQuCj4gLSBhIF91c2VFZmZlY3RfIHRoYXQgdXBkYXRlIF9tZXNzYWdlcyBlZmZlY3QgcHJvcGVydHlfIHdoZW4gX3N0YXRlXyBjaGFuZ2UuCj4gLSBhIF91c2VFZmZlY3RDb21wYXJlXyB0aGF0IHVwZGF0ZSBfbWVzc2FnZXMgZWZmZWN0IHByb3BlcnR5Xy4gQ29tcGFyZUZuIHJldHVybnMgdHJ1ZSB3aGVuIF9zdGF0ZSBuYW1lIHByb3BlcnR5XyBjaGFuZ2UuCj4gLSBhIGJ1dHRvbiB3aXRoIGEgZnVuY3Rpb24gYXR0YWNoZWQgdG8gb25DbGljayBldmVudCB0aGF0IGluY3JlbWVudCBfc3RhdGUgaWQgcHJvcGVydHlfLgo+IAo+IFNpbmNlIGNvbXBhcmVGbiBjb21wYXJlcyBvbmx5IF9uYW1lIHByb3BlcnR5XywgdXNlRWZmZWN0Q29tcGFyZSBpcyByZWV4ZWN1dGVkIG9ubHkgb25jZSBhbmQgaXRzIHN0YXRlIHZhbHVlIGlzbid0IHVwZGF0ZWQuIFlvdSBjYW4gc2VlIHRoaXMgaW4gZGV2IHRvb2wgY29uc29sZSBhbHNvLgoKCiMjIEFQSQoKYGBgdHN4CnVzZUVmZmVjdENvbXBhcmUgPFQgPSB1bmtub3duPihjYjogRWZmZWN0Q2FsbGJhY2ssIGRlcHM6IERlcGVuZGVuY3lMaXN0VHlwZWQ8VD4sIGNvbXBhcmVGbj86IENvbXBhcmVGbjxUPikgCmBgYAoKPiAjIyMgUGFyYW1zCj4KPiAtIF9fY2JfXzogX0VmZmVjdENhbGxiYWNrXyAgCkltcGVyYXRpdmUgZnVuY3Rpb24gdGhhdCBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbi4KPiAtIF9fZGVwc19fOiBfRGVwZW5kZW5jeUxpc3RUeXBlZF8gIAp0eXBlZCBkZXBlbmRlbmN5IGxpc3QuCj4gLSBfX2NvbXBhcmVGbj9fXzogX0NvbXBhcmVGbl8gIApvcHRpb25hbCBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIGNvbXBhcmluZyBiZXR3ZWVuIG9sZCBhbmQgbmV3IGBkZXBzYDogaXQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlIGRpZmZlcmVudCwgb3RoZXJ3aXNlIGZhbHNlLiBJZiB0aGVyZSBpc24ndCwgaG9vayB3b3JrcyBsaWtlIG5vcm1hbCB1c2VFZmZlY3QuCj4KCj4gIyMjIFJldHVybnMKPgo+IAo+IC0gX3ZvaWRfICAKPg==";export{Z as default};

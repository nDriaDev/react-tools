const g="data:text/markdown;base64,IyB1c2VTZXNzaW9uU3RvcmFnZVN0YXRlCkN1c3RvbSBfdXNlU3RhdGVfIGhvb2sgaW1wbGVtZW50YXRpb24gdXNpbmcgX3Nlc3Npb25TdG9yYWdlXywgd2l0aCBpbW11dGFibGUgX2dldHRlciBzdGF0ZV8gZnVuY3Rpb24gYW5kIHRvIF9yZW1vdmVfIGtleSBmcm9tIHNlc3Npb25TdG9yYWdlLgoKIyMgVXNhZ2UKCmBgYHRzeApjb25zdCBDaGlsZCA9ICgpID0+IHsKCWNvbnN0IFtzdGF0ZV0gPSB1c2VTZXNzaW9uU3RvcmFnZVN0YXRlPHN0cmluZz4oe2tleToiZGVtbyIsIG9wdHM6IHttb2RlOiAicmVhZCJ9fSk7CglyZXR1cm4gKDw+CgkJPGgzPkNoaWxkIGNvbXBvbmVudCAxPC9oMz4KCQk8cD5TdGF0ZSBpcyB7c3RhdGV9PC9wPgoJPC8+KQp9Cgpjb25zdCBDaGlsZDIgPSAoKSA9PiB7Cgljb25zdCBbc2V0U3RhdGVdID0gdXNlU2Vzc2lvblN0b3JhZ2VTdGF0ZTxzdHJpbmc+KHtrZXk6ImRlbW8iLCBvcHRzOiB7bW9kZTogIndyaXRlIn19KTsKCXJldHVybiAoPD4KCQk8aDM+Q2hpbGQgY29tcG9uZW50IDI8L2gzPgoJCTxmb3JtIG9uU3VibWl0PXsoZTogQmFzZVN5bnRoZXRpY0V2ZW50KSA9PiB7CgkJCXNldFN0YXRlKGUudGFyZ2V0WzBdLnZhbHVlKTsKCQkJZS5wcmV2ZW50RGVmYXVsdCgpOwoJCX19PgoJCQk8aW5wdXQgdHlwZT0idGV4dCIgLz4KCQk8L2Zvcm0+Cgk8Lz4pCn0KCmNvbnN0IFVzZVNlc3Npb25TdG9yYWdlU3RhdGUgPSAoKSA9PiB7Cgljb25zdCBbLCAsICwgcmVtb3ZlXSA9IHVzZVNlc3Npb25TdG9yYWdlU3RhdGUoeyBrZXk6ICJkZW1vIiwgaW5pdGlhbFN0YXRlOiAicHJvdmEiIH0pOwoKCWNvbnN0IGNsZWFyID0gdXNlQ2FsbGJhY2soKCkgPT4gcmVtb3ZlKCksIFtyZW1vdmVdKTsKCgl1c2VFZmZlY3QoKCkgPT4gewoJCXJldHVybiAoKSA9PiB7CgkJCWNsZWFyKCk7CgkJfQoJfSwgW2NsZWFyXSk7CgoJcmV0dXJuICg8PgoJCTxDaGlsZCAvPgoJCTxiciAvPgoJCTxDaGlsZDIvPgoJPC8+KTsKfQoKVXNlU2Vzc2lvblN0b3JhZ2VTdGF0ZS5kaXNwbGF5TmFtZSA9ICJVc2VTZXNzaW9uU3RvcmFnZVN0YXRlIjsKCmV4cG9ydCB7IFVzZVNlc3Npb25TdG9yYWdlU3RhdGUgfTsKYGBgCgo+IFRoZSBjb21wb25lbnQgaGFzOgo+IC0gQW4gaW50ZXJuYWwgX3VzZVNlc3Npb25TdG9yYWdlXyBzdGF0ZSB3aXRoIF9fa2V5X18gX2RlbW9fIGFuZCBfX2luaXRpYWxTdGF0ZV9fIF9wcm92YV8gZnJvbSB3aGljaCBnZXRzIF9fcmVtb3ZlX18gZnVuY3Rpb24uCj4gLSBBIENoaWxkIGNvbXBvbmVudCAxIHRoYXQgdXNlcyBfdXNlU2Vzc2lvblN0b3JhZ2VfIHdpdGggX3JlYWRfIF9fbW9kZV9fIGFuZCBfX2tleV9fIF9kZW1vXyB0byByZWFkIGZyb20gc2Vzc2lvblN0b3JhZ2UuCj4gLSBBIENoaWxkIGNvbXBvbmVudCAyIHRoYXQgdXNlcyBfdXNlU2Vzc2lvblN0b3JhZ2VfIHdpdGggX3dyaXRlXyBfX21vZGVfXyBhbmQgX19rZXlfXyAgX2RlbW9fIHRvIHdyaXRlIHRvIHNlc3Npb25TdG9yYWdlIHdpdGggYW4gb25TdWJtaXQgZm9ybSBldmVudCB3aXRoIGEgaW5wdXQgdGV4dCB2YWx1ZS4KPiAtIEFuIHVzZUVmZmVjdCB0aGF0IGludm9rZXMgX19yZW1vdmVfXyBmdW5jdGlvbiBhbmQgZGVsZXRlIGl0ZW0gd2l0aCBrZXkgX2RlbW9fIGZyb20gc2Vzc2lvblN0b3JhZ2Ugd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzLgo+IAo+IFdoZW4gY29tcG9uZW50IGlzIG1vdW50ZWQsIHRoZSBDaGlsZDEgc3RhdGUgaXMgX3Byb3ZhXy4gSXQgY2FuIGJlIGNoYW5nZWQgYnkgQ2hpbGQyLiBJZiB5b3Ugb3BlbiB0aGUgcGFnZSBpbnRvIGFub3RoZXIgdGFiLCBjaGFuZ2VzIGFyZW4ndCByZWZsZWN0ZWQgaW4gYm90aCB0YWJzLgoKCiMjIEFQSQoKYGBgdHN4CnVzZVNlc3Npb25TdG9yYWdlU3RhdGU8VD4oeyBrZXksIGluaXRpYWxTdGF0ZSwgb3B0cyB9OiB7IGtleTogc3RyaW5nLCBpbml0aWFsU3RhdGU/OiBUIHwgKCgpID0+IFQpLCBvcHRzPzogeyBzZXJpYWxpemVyPzogKGl0ZW06IFQpID0+IHN0cmluZywgZGVzZXJpYWxpemVyPzogKGl0ZW06IHN0cmluZykgPT4gVCwgbW9kZT86ICJyZWFkIiB8ICJ3cml0ZSIgfCAicmVhZC93cml0ZSIgfSB9KTogW1QsICgpID0+IFQsICgpID0+IHZvaWRdIHwgW0Rpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFQ+PiwgKCkgPT4gVCwgKCkgPT4gdm9pZF0gfCBbVCwgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248VD4+LCAoKSA9PiBULCAoKSA9PiB2b2lkXSAKYGBgCgo+ICMjIyBQYXJhbXMKPgo+IC0gX19wYXJhbXNfXzogX09iamVjdF8KPiAtIF9fcGFyYW1zLmtleV9fOiBfc3RyaW5nXyAgCml0ZW0ga2V5IGluIHNlc3Npb24gc3RvcmFnZS4KPiAtIF9fcGFyYW1zLmluaXRpYWxTdGF0ZT9fXzogX1QgfCAoKSA9PiBUXyAgCnZhbHVlIG9yIGEgZnVuY3Rpb24gLCBvcHRpb25hbC4KPiAtIF9fcGFyYW1zLm9wdHM9e3NlcmlhbGl6ZXI6IEpTT04uc3RyaW5naWZ5LCBkZXNlcmlhbGl6ZXI6IGpTT04ucGFyc2UsIG1vZGU6ICJyZWFkL3dyaXRlIn0/X186IF97c2VyaWFsaXplcjogKGl0ZW06IFQpPT4gc3RyaW5nLCBkZXNlcmlhbGl6ZXI6IChpdGVtOiBzdHJpbmcpPT4gVCwgbW9kZT86ICJyZWFkIiB8ICJ3cml0ZSIgfCAicmVhZC93cml0ZSJ9XyAgCm9iamVjdCB3aXRoIHNlcmlhbGl6ZXIgYW5kIGRlc2VyaWFsaXplciBmdW5jdGlvbiB0byBoYW5kbGUgdmFsdWVzIGluIHNlc3Npb25TdG9yYWdlIGFuZCBtb2RlIHByb3BlcnR5IHRvIHVzZSBob29rIG9ubHkgdG8gcmVhZCwgd3JpdGUgb3IgYm90aC4KPgoKPiAjIyMgUmV0dXJucwo+Cj4gCj4gLSBfX1VuaW9uIG9mX186ICAKPiAgICAgLSBfX0FycmF5X186ICAKPiAgICAgICAgIC0gX1RfICAKPiAgICAgICAgIC0gXygpID0+IFQsICgpID0+IHZvaWRfICAKPiAgICAgLSBfX0FycmF5X186ICAKPiAgICAgICAgIC0gX0Rpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFQ+Pl8gIAo+ICAgICAgICAgLSBfKCkgPT4gVCwgKCkgPT4gdm9pZF8gIAo+ICAgICAtIF9fQXJyYXlfXzogIAo+ICAgICAgICAgLSBfVF8gIAo+ICAgICAgICAgLSBfRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248VD4+XyAgCj4gICAgICAgICAtIF8oKSA9PiBULCAoKSA9PiB2b2lkXyAgCj4=";export{g as default};
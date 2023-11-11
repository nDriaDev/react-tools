const Z="data:text/markdown;base64,IyB1c2VFZmZlY3REZWVwQ29tcGFyZQpDdXN0b20gdXNlRWZmZWN0IHRoYXQgcmVleGVjdXRlcyBFZmZlY3RDYWxsYmFjayBvbmx5IHdoZW4gZGVwcyBhcmUgZGlmZmVyZW50IGluIGRlcHRoLgoKIyMgVXNhZ2UKCmBgYHRzeApjb25zdCBVc2VFZmZlY3REZWVwQ29tcGFyZSA9ICgpID0+IHsKCWNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBpZDogMCwgbmFtZTogInN0YXRlIiB9KTsKCWNvbnN0IFtyZW5kZXJzLCBzZXRSZW5kZXJzXSA9IHVzZVN0YXRlKHttZW1vOjAsIGRlZXBNZW1vOiAwfSk7CgoJdXNlRWZmZWN0KCgpID0+IHsKCQljb25zb2xlLmxvZygiUmVuZGVyIGRlZmF1bHQgdXNlRWZmZWN0Iik7CgkJc2V0UmVuZGVycyhyID0+ICh7Li4uciwgbWVtbzogci5tZW1vKzF9KSk7Cgl9LCBbc3RhdGVdKQoKCXVzZUVmZmVjdERlZXBDb21wYXJlKCgpID0+IHsKCQljb25zb2xlLmxvZygiUmVuZGVyIG1lbW9EZWVwQ29tcGFyZSIpOwoJCXNldFJlbmRlcnMociA9PiAoey4uLnIsIGRlZXBNZW1vOiByLmRlZXBNZW1vKzF9KSk7Cgl9LCBbc3RhdGVdKTsKCglyZXR1cm4gKDw+CgkJPHA+Q3VycmVudCBzdGF0ZTogaWQ6IHtzdGF0ZS5pZH0gLSBuYW1lOiB7c3RhdGUubmFtZX08L3A+CgkJPHA+dXNlRWZmZWN0IHJlbmRlcjoge3JlbmRlcnMubWVtb308L3A+CgkJPHA+dXNlRWZmZWN0RGVlcENvbXBhcmUgcmVuZGVyOiB7cmVuZGVycy5kZWVwTWVtb308L3A+CgkJPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZSh0PT4gKHsgLi4udH0pKX0+SW5jcmVtZW50PC9idXR0b24+Cgk8Lz4pOwp9OwoKVXNlRWZmZWN0RGVlcENvbXBhcmUuZGlzcGxheU5hbWUgPSAiVXNlRWZmZWN0RGVlcENvbXBhcmUiOwoKZXhwb3J0IHsgVXNlRWZmZWN0RGVlcENvbXBhcmUgfTsKYGBgCgo+IFRoZSBjb21wb25lbnQgaGFzOgo+IC0gYSBfc3RhdGUgdXNlU3RhdGUgdmFyaWFibGVfIHdpdGggX2lkXyBhbmQgX25hbWVfIHByb3BlcnRpZXMuCj4gLSBhIF9yZW5kZXJzIHVzZVN0YXRlIHZhcmlhYmxlXyB3aXRoIF9tZW1vXyBhbmQgX2RlZXBNZW1vXyBwcm9wZXJ0aWVzLgo+IC0gYSB1c2VFZmZlY3QgdGhhdCB1cGRhdGVzIF9yZW5kZXJzIG1lbW8gcHJvcGVydHlfIHdoZW4gX3N0YXRlIHZhcmlhYmxlXyBjaGFuZ2UuCj4gLSBhIHVzZU1lbW9EZWVwQ29tcGFyZSB0aGF0IHVwZGF0ZXMgX3JlbmRlcnMgZGVlcE1lbW8gcHJvcGVydHlfIHdoZW4gX3N0YXRlIHZhcmlhYmxlXyBjaGFuZ2UuCj4gLSBhIGJ1dHRvbiB3aXRoIGEgZnVuY3Rpb24gYXR0YWNoZWQgdG8gb25DbGljayBldmVudCB0aGF0IGFzc2lnbnMgdG8gX3N0YXRlIHZhcmlhYmxlXyB0aGUgc2FtZSB2YWx1ZS4KPiAKPiBTaW5jZSB1c2VFZmZlY3REZWVwQ29tcGFyZSBjaGVja3MgZm9yIGRpZmZlcmVuY2VzIGluIGRlcHRoLCBpdCBpcyBleGVjdXRlZCBvbmx5IG9uY2UgYW5kIGl0IGRvbid0IHVwZGF0ZSByZW5kZXJzIGRlZXBNZW1vIHByb3BlcnR5LiBZb3UgY2FuIHNlZSB0aGlzIGluIGRldiB0b29sIGNvbnNvbGUgYWxzby4KCgojIyBBUEkKCmBgYHRzeAp1c2VFZmZlY3REZWVwQ29tcGFyZSAoY2I6IEVmZmVjdENhbGxiYWNrLCBkZXBzOiBEZXBlbmRlbmN5TGlzdCk6dm9pZCAKYGBgCgo+ICMjIyBQYXJhbXMKPgo+IC0gX19jYl9fOiBfRWZmZWN0Q2FsbGJhY2tfICAKSW1wZXJhdGl2ZSBmdW5jdGlvbiB0aGF0IGNhbiByZXR1cm4gYSBjbGVhbnVwIGZ1bmN0aW9uLgo+IC0gX19kZXBzX186IF9EZXBlbmRlbmN5TGlzdF8gIApkZXBlbmRlbmN5IGxpc3QuCj4KCj4gIyMjIFJldHVybnMKPgo+IAo+IC0gX3ZvaWRfICAKPg==";export{Z as default};
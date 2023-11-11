const Z="data:text/markdown;base64,IyB1c2VFZmZlY3RPbmNlCkhvb2sgdG8gZXhlY3V0ZXMgX2VmZmVjdF8gYW5kIF9jbGVhbiB1cF8gYWZ0ZXIgY29tcG9uZW50IG1vdW50IF9fb25seSBvbmNlX18uIEl0IHByZXZlbnRzIF9SZWFjdCAxOCBTdHJpY3RNb2RlXyBiZWhhdmlvciBpZiBwcmVzZW50LCBvdGhlcndpc2UgaXQgd29ya3MgbGlrZSBhIG5vcm1hbCBfdXNlRWZmZWN0XyB3aXRoIGVtcHR5IGRlcGVuZGVuY2llcyBhcnJheS4gX18qTi5CLipfXyBOb3QgdXNlIGluIGEgY29tcG9uZW50IHdpdGggbm9ybWFsIF91c2VFZmZlY3RfLCBpZiBpdCBleGVjdXRlcyBhIF9SZWFjdC5EaXNwYXRjaEFjdGlvbl8sIGJlY2F1c2UgdGhpcyBhY3Rpb24gaXMgZXhlY3V0ZXMgdHdpY2UgaWYgdGhlcmUgaXMgX1JlYWN0LlN0cmljdE1vZGVfLgoKIyMgVXNhZ2UKCmBgYHRzeApjb25zdCBDaGlsZDEgPSAoKSA9PiB7Cgljb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7CgoJdXNlRWZmZWN0KCgpID0+IHsKCQlzZXRNZXNzYWdlcyhtID0+IChbLi4ubSwgInJ1biBlZmZlY3QiXSkpOwoJCXJldHVybiAoKSA9PiB7CgkJCXNldE1lc3NhZ2VzKG0gPT4gKFsuLi5tLCAicnVuIGNsZWFuIHVwIGZ1bmN0aW9uIGVmZmVjdCJdKSk7CgkJfQoJfSwgW10pOwoJcmV0dXJuICg8ZGl2PgoJCTxwPjxzdHJvbmc+VXNlRWZmZWN0PC9zdHJvbmc+PC9wPgoJCXttZXNzYWdlcy5tYXAoKG1lc3MsIGluZGV4KSA9PiA8cCBrZXk9e2luZGV4fT57bWVzc308L3A+KX0KCTwvZGl2Pik7Cn0KCmNvbnN0IENoaWxkMiA9ICgpID0+IHsKCWNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTsKCgl1c2VFZmZlY3RPbmNlKCgpID0+IHsKCQlzZXRNZXNzYWdlcyhtID0+IChbLi4ubSwgInJ1biBlZmZlY3QiXSkpOwoJCXJldHVybiAoKSA9PiB7CgkJCXNldE1lc3NhZ2VzKG0gPT4gKFsuLi5tLCAicnVuIGNsZWFuIHVwIGZ1bmN0aW9uIGVmZmVjdCJdKSk7CgkJfQoJfSk7CgoJcmV0dXJuICg8ZGl2PgoJCTxwPjxzdHJvbmc+VXNlRWZmZWN0T25jZTwvc3Ryb25nPjwvcD4KCQl7bWVzc2FnZXMubWFwKChtZXNzLCBpbmRleCkgPT4gPHAga2V5PXtpbmRleH0+e21lc3N9PC9wPil9Cgk8L2Rpdj4pOwp9Cgpjb25zdCBVc2VFZmZlY3RPbmNlID0gKCkgPT4gewoJcmV0dXJuICgKCQk8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICJncmlkIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogImF1dG8gYXV0byIsIGp1c3RpZnlDb250ZW50OiAiY2VudGVyIiwgZ2FwOiA1MCB9fT4KCQkJPENoaWxkMSAvPgoJCQk8Q2hpbGQyIC8+CgkJPC9kaXY+CgkpOwp9OwoKVXNlRWZmZWN0T25jZS5kaXNwbGF5TmFtZSA9ICJVc2VFZmZlY3RPbmNlIjsKCmV4cG9ydCB7IFVzZUVmZmVjdE9uY2UgfTsKYGBgCgo+IFRoZSBjb21wb25lbnQgaGFzOgo+IC0gYSBfQ2hpbGQxXyBjb21wb25lbnQgd2l0aCBhIF9tZXNzYWdlcyB1c2VTdGF0ZSB2YXJpYWJsZV8gYW5kIF91c2VFZmZlY3RfIHRoYXQgc2V0cyBhIG1lc3NhZ2UgZm9yIGVmZmVjdCBhbmQgY2xlYW4gdXAgZXhlY3V0aW9ucy4KPiAtIGEgX0NoaWxkMl8gY29tcG9uZW50IHdpdGggYSBfbWVzc2FnZXMgdXNlU3RhdGUgdmFyaWFibGVfIGFuZCBfdXNlRWZmZWN0T25jZV8gdGhhdCBzZXRzIGEgbWVzc2FnZSBmb3IgZWZmZWN0IGFuZCBjbGVhbiB1cCBleGVjdXRpb25zLgo+IAo+IFNpbmNlIF9SZWFjdCAxOCBTdHJpY3RNb2RlXyBleGVjdXRlcyBlZmZlY3RzIHR3aWNlIChtb3VudCAtIHVubW91bnQgLSBtb3VudCksIHRoZSBfdXNlRWZmZWN0XyB3aWxsIHByaW50IF9ydW4gZWZmZWN0XyBtZXNzYWdlIHR3aWNlLCBfdXNlRWZmZWN0T25jZV8gbm8uCgoKIyMgQVBJCgpgYGB0c3gKdXNlRWZmZWN0T25jZSAoZWZmZWN0OiBFZmZlY3RDYWxsYmFjaykgCmBgYAoKPiAjIyMgUGFyYW1zCj4KPiAtIF9fZWZmZWN0X186IF9FZmZlY3RDYWxsYmFja18KPgoKPiAjIyMgUmV0dXJucwo+Cj4gCj4gCj4=";export{Z as default};
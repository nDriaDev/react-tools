const d="data:text/markdown;base64,IyB1c2VTdGF0ZUdldFJlc2V0CkN1c3RvbSB1c2VTdGF0ZSB3aXRoIGdldCBhbmQgcmVzZXQgc3RhdGUgZnVuY3Rpb25zLgoKIyMgVXNhZ2UKCmBgYHRzeApjb25zdCBVc2VTdGF0ZUdldFJlc2V0ID0gKCkgPT4gewoJY29uc3QgW3N0YXRlRywgc2V0U3RhdGVHLCBnZXRTdGF0ZSwgcmVzZXRTdGF0ZV0gPSB1c2VTdGF0ZUdldFJlc2V0KHsgaWQ6ICIiLCBuYW1lOiAiIiwgZXRhOiAiIiB9KTsKCWNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBpZDogIiIsIG5hbWU6ICIiLCBldGE6IiIgfSk7CgoJY29uc3Qgb25DaGFuZ2VHZXR0ZXIgPSB1c2VDYWxsYmFjaygoZTogQmFzZVN5bnRoZXRpY0V2ZW50KSA9PiB7CgkJY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpOwoJCXNldFN0YXRlRyh7CgkJCS4uLnN0YXRlLAoJCQlbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlCgkJfSk7Cgl9LCBbZ2V0U3RhdGUsIHNldFN0YXRlR10pCgoJY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZTogQmFzZVN5bnRoZXRpY0V2ZW50KSA9PiB7CgkJc2V0U3RhdGUoewoJCQkuLi5zdGF0ZSwKCQkJW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZQoJCX0pOwoJfSwgW3N0YXRlLCBzZXRTdGF0ZV0pCgoJcmV0dXJuICgKCQk8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICJncmlkIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogImF1dG8gYXV0byIsIGp1c3RpZnlDb250ZW50OiAiY2VudGVyIiwgZ2FwOiA1MCB9fT4KCQkJPGRpdj4KCQkJCTxwPjxzdHJvbmc+V2l0aCBnZXQgYW5kIHJlc2V0PC9zdHJvbmc+PC9wPgoJCQkJPGRpdiBzdHlsZT17eyBncmlkVGVtcGxhdGVSb3dzOiAiYXV0byBhdXRvIGF1dG8gYXV0byIsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZGlzcGxheTogJ2dyaWQnLCBnYXA6ICcxMHB4JyB9fT4KCQkJCQk8SW5wdXQgaWQ9ImlkRyIgbmFtZT0iaWQiIHZhbHVlPXtzdGF0ZUcuaWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUdldHRlcn0gLz4KCQkJCQk8SW5wdXQgaWQ9Im5hbWVHIiBuYW1lPSJuYW1lIiB2YWx1ZT17c3RhdGVHLm5hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZUdldHRlcn0gLz4KCQkJCQk8SW5wdXQgaWQ9ImV0YUciIG5hbWU9ImV0YSIgdmFsdWU9e3N0YXRlRy5ldGF9IG9uQ2hhbmdlPXtvbkNoYW5nZUdldHRlcn0gLz4KCQkJCQk8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0U3RhdGV9PlJlc2V0IFN0YXRlPC9idXR0b24+CgkJCQk8L2Rpdj4KCQkJPC9kaXY+CgkJCTxkaXY+CgkJCQk8cD48c3Ryb25nPldpdGhvdXQgZ2V0IGFuZCByZXNldDwvc3Ryb25nPjwvcD4KCQkJCTxkaXYgc3R5bGU9e3sgZ3JpZFRlbXBsYXRlUm93czogImF1dG8gYXV0byBhdXRvIiwganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzEwcHgnIH19PgoJCQkJCTxJbnB1dCBpZD0iaWQiIG5hbWU9ImlkIiB2YWx1ZT17c3RhdGUuaWR9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4KCQkJCQk8SW5wdXQgaWQ9Im5hbWUiIG5hbWU9Im5hbWUiIHZhbHVlPXtzdGF0ZS5uYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+CgkJCQkJPElucHV0IGlkPSJldGEiIG5hbWU9ImV0YSIgdmFsdWU9e3N0YXRlLmV0YX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPgoJCQkJPC9kaXY+CgkJCTwvZGl2PgoJCTwvZGl2PgoJKTsKfTsKClVzZVN0YXRlR2V0UmVzZXQuZGlzcGxheU5hbWUgPSAiVXNlU3RhdGVHZXRSZXNldCI7CgpleHBvcnQgeyBVc2VTdGF0ZUdldFJlc2V0IH07CmBgYAoKPiBUaGUgY29tcG9uZW50IGhhczoKPiAtIEEgX3VzZVN0YXRlR2V0UmVzZXRfIHRoYXQgcmVjZWl2ZXMgYW4gb2JqZWN0LCB3aXRoIHRocmVlIHByb3BlcnRpZXMgX2lkXywgX25hbWVfLCBfZXRhXywgYW5kIHJldHVybnMgYSB0dXBsZSB3aXRoIF9zdGF0ZUdfLCBfc2V0dGVyR18sIF9nZXR0ZXJfIGFuZCBfcmVzZXR0ZXJfLgo+IC0gQSBfdXNlU3RhdGVfIHRoYXQgcmVjZWl2ZXMgc2FtZSBvYmplY3Qgb2YgdXNlU3RhdGVHZXR0ZXIgYW5kIHJldHVybnMgYSB0dXBsZSB3aXRoIF9zdGF0ZV8gYW5kIF9zZXR0ZXJfLgo+IC0gRWFjaCBwcm9wZXJ0eSBvZiBfc3RhdGVfIGFuZCBfc3RhdGVHXyBpcyByZW5kZXJlZCBhbiBJbnB1dCBjb21wb25lbnQgdGhhdCByZW5kZXJzIHRoZSBpbnB1dCBhbmQgbGFiZWwgZmllbGRzIGFuZCB0aGUgX2NvbXBvbmVudCdzIG51bWJlciBvZiByZW5kZXJzXy4KPiAtIEEgX29uQ2hhbmdlR2V0dGVyXyBmdW5jdGlvbiBtYWRlIHdpdGggdXNlQ2FsbGJhY2sgdG8gaGFuZGxlIHN0YXRlR2V0dGVyIGlucHV0IG9uQ2hhbmdlLCByZWFkaW5nIG90aGVyIHZhbHVlcyB3aXRoIGdldHRlciBmdW5jdGlvbi4KPiAtIEEgX29uQ2hhbmdlXyBmdW5jdGlvbiBtYWRlIHdpdGggdXNlQ2FsbGJhY2sgdG8gaGFuZGxlIHN0YXRlciBpbnB1dCBvbkNoYW5nZSwgcmVhZGluZyBvdGhlciB2YWx1ZXMgYnkgc3RhdGUgdmFyaWFibGUuCj4gLSBBIGJ1dHRvbiB0aGF0IGV4ZWN1dGVzIHRoZSBfcmVzZXR0ZXJfIGZ1bmN0aW9uIG9uIF9zdGF0ZUdfLgo+IAo+IFRoZSB0d28gZnVuY3Rpb25zIG9uQ2hhbmdlIGFuZCBvbkNoYW5nZSBHZXR0ZXIgdXBkYXRlIHRoZWlyIHJlc3BlY3RpdmUgX3N0YXRlXyBldmVyeSB0aW1lIHRoZXkgYXJlIGV4ZWN1dGVkLiBTaW5jZSB0aGUgX29uQ2hhbmdlXyBmdW5jdGlvbiBkZXBlbmRzIG9uIHRoZSBzdGF0ZSwgZXZlcnkgdGltZSB0aGlzIGNoYW5nZXMgaXQgd2lsbCBiZSByZWV2YWx1YXRlZCBhbmQgdGhpcyB3aWxsIGFsc28gdHJpZ2dlciB0aGUgcmVyZW5kZXIgb2YgdGhlIGlucHV0IGNvbXBvbmVudHMgdGhhdCBoYXZlIG5vdCB1bmRlcmdvbmUgYSBjaGFuZ2UgdG8gdGhlaXIgX3ZhbHVlXyB2YXJpYWJsZS4gVGhlIF9vbkNoYW5nZUdldHRlcl8gZG9lc24ndCBoYXZlIHRoaXMgYmVoYXZpb3I6IHNpbmNlIHRoZSBfZ2V0dGVyXyBmdW5jdGlvbiBpc24ndCByZWV2YWx1YXRlZCBldmVuIGlmIHRoZSBfc3RhdGVHXyBjaGFuZ2VzLCBzbyB0aGUgX29uQ2hhbmdlR2V0dGVyXyBpcyBuZXZlciByZWV2YWx1YXRlZCBhbmQgb25seSB0aGUgaW5wdXQgY29tcG9uZW50IHRoYXQgaGFzIGEgY2hhbmdlIGluIHRoZSBfdmFsdWVfIHZhcmlhYmxlIGlzIHJlcmVuZGVyZWQuCgoKIyMgQVBJCgpgYGB0c3gKdXNlU3RhdGVHZXRSZXNldCA8VD4oaW5pdGlhbFN0YXRlOiBUIHwgKCgpID0+IFQpKTogW1QsIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFQ+PiwgKCkgPT4gVCwgKCkgPT4gdm9pZF0gCmBgYAoKPiAjIyMgUGFyYW1zCj4KPiAtIF9faW5pdGlhbFN0YXRlX186IF9UIHwgKCkgPT4gVF8gIAp2YWx1ZSBvciBhIGZ1bmN0aW9uLgo+Cgo+ICMjIyBSZXR1cm5zCj4KPiBfX2FycmF5X18KPiAtIF9fQXJyYXlfXzogIAo+ICAgICAtIF9UXyAgCj4gICAgIC0gX0Rpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFQ+Pl8gIAo+ICAgICAtIF8oKSA9PiBULCAoKT0+dm9pZF8gIAo+";export{d as default};

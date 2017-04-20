#include <node.h>

namespace siren
{
  void test(const v8::FunctionCallbackInfo<v8::Value>& args)
  {
    v8::Isolate* iso = args.GetIsolate();
    args.GetReturnValue().Set(v8::String::NewFromUtf8(iso, "hi, i am siren."));
  }

  void init(v8::Local<v8::Object> exps)
  {
    NODE_SET_METHOD(exps, "test", test);
  }

  NODE_MODULE(siren, init);
}


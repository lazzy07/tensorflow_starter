import ConsoleStylingClass from "./console_styling/ConsoleStylingClass"
import TFSetupCalss from "./tensorflow/TFSetupClass";

class AppClass{
  static main = () => {
    ConsoleStylingClass.run();
    TFSetupCalss.makeTensor([1,1,1,5]);
  }
}

AppClass.main();
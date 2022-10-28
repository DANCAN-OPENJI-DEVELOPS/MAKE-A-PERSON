No properties should be added. Object.keys(bob).length should always return 6.
Passed:bob instanceof Person should return true.
Passed:bob.firstName should return undefined.
Passed:bob.lastName should return undefined.
Passed:bob.getFirstName() should return the string Bob.
Passed:bob.getLastName() should return the string Ross.
Passed:bob.getFullName() should return the string Bob Ross.
Passed:bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
Passed:bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
Passed:bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
Passed:bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
Passed:bob.getLastName() should return the string Curry after bob.setFullName("Has

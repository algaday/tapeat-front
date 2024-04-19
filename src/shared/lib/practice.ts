interface Subject {
  addObserver(observer: Observer): void
  removeObserver(observer: Observer): void
  notify(): void
}

interface Observer {
  update(subject: Subject): void
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = []
  public number: number = 0

  addObserver(observer: Observer): void {
    this.observers.push(observer)
  }
  removeObserver(observer: Observer): void {}

  notify(): void {
    for (const obs of this.observers) {
      obs.update(this)
    }
  }

  setNumber(value: number) {
    this.number = value
    this.notify()
  }
}

class SomeObserver implements Observer {
  public updatedNumber: number = 0
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject) {
      this.updatedNumber = subject.number
    }
  }
}

const subject = new ConcreteSubject()

const object1 = new SomeObserver()

subject.addObserver(object1)
subject.setNumber(23)
console.log(object1.updatedNumber)

class person(object):
def__init__(self,name):
self.name=name
def getname(self):
return self.name
def isEmployee(self):
return false
class isEmployee(person):
def isEmployee(self):
return true
emp=person("james")
print(emp.getname(),emp.isEmployee())
emp=Employee("Goodrich")
print(emp.getname(),emp.isEmployee())

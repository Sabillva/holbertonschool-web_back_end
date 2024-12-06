import re

class LogicEngine:
    def __init__(self):
        pass

    def and_elimination(self, expr):
        if '∧' in expr:
            terms = [term.strip() for term in expr.split('∧')]
            return terms
        return None

    def implication_elimination(self, expr):
        match = re.match(r"(.*) → (.*)", expr)
        if match:
            premise = match.group(1).strip()
            conclusion = match.group(2).strip()
            return premise, conclusion
        return None

    def negation_elimination(self, expr):
        if expr.startswith("¬"):
            return expr[1:].strip()
        return None

    def or_elimination(self, expr):
        if '∨' in expr:
            terms = [term.strip() for term in expr.split('∨')]
            return terms
        return None

    def evaluate(self, expr):
        print(f"İfadə: {expr}")
        
        if '∧' in expr:
            terms = self.and_elimination(expr)
            if terms:
                print(f"AND Eliminasiya: {expr} => {', '.join(terms)}")
        
        elif '→' in expr:
            result = self.implication_elimination(expr)
            if result:
                premise, conclusion = result
                print(f"Implication Eliminasiya: {expr} => {conclusion} (əgər {premise} doğru olarsa)")
        
        elif '¬' in expr:
            result = self.negation_elimination(expr)
            if result:
                print(f"Negation Eliminasiya: {expr} => {result} (əksini çıxarır)")

        elif '∨' in expr:
            terms = self.or_elimination(expr)
            if terms:
                print(f"OR Eliminasiya: {expr} => {', '.join(terms)}")
        
        else:
            print("Bu ifadəni həll etmək mümkün deyil.")

engine = LogicEngine()

expressions = [
    "p ∧ q",
    "a ∧ b ∧ c",
    "p → q",
    "(a ∧ b) → c",
    "¬p",
    "¬(a ∧ b)",
    "(p ∧ q) → r",
    "¬(p → q)",
    "(¬p ∧ q) → r",
    "((p ∧ q) → r) ∧ (¬r → s)",
    "(a → b) ∧ (b → c) → (a → c)"
]

for expr in expressions:
    engine.evaluate(expr)
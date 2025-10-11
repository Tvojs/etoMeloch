from random import choice as ch


def rang_name_gen():
    sogl = list("кцйфвпрмчрлнгщзхжбхьъ")
    gl = list("аеуюэёоя")

    name = ch(sogl) + ch(gl) + ch(sogl) + ch(gl)
    return name


for i in range(10):
    print(rang_name_gen())

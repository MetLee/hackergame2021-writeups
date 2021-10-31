#include <stdio.h>
__attribute__((section("FOO"))) char s[] = "Hello, world!";
__attribute__((section("FOO"))) char ss[] = "%s";
int main()
{
    printf(ss, s);
    return 0;
}
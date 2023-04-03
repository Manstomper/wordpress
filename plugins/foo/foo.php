<?php
/*
 * Plugin Name: Foo
 */

namespace Foo;

class Foo
{
    //#[Deprecated]
    public int $randomNumber = 0;

    public function __construct()
    {
    }

    public function bar(bool $something = false): string
    {
        var_dump((Status::PUBLISHED)->value);
        var_dump(Status::from('published'));
        var_dump((Status::DRAFT)->color());
        //['port' => $v] = parse_url('http://localhost:8101');
        //var_dump($v);

        //var_dump(str_contains('the quick fox', 'quick'));
        //var_dump(str_starts_with('the quick fox', 'fox'));
        //var_dump(str_ends_with('the quick fox', 'fox'));

        /*try {
            throw new \Exception('Testing', 400);
        } catch (\Throwable) {
            var_dump('error');
        }*/

        return 'baz';
    }
}

enum Status: string
{
    case DRAFT = 'draft';
    case PUBLISHED = 'published';

    public function color(): string
    {
        return match ($this) {
            Status::DRAFT => 'grey',
            Status::PUBLISHED => 'green',
        };
    }
}

$foo = new Foo();
//$foo->randomNumber = 2;
//$foo->bar();

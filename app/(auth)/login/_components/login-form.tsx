"use client"

import { ComponentProps, useState, SyntheticEvent } from "react"

import { cn } from "@/lib/utils"
import GoogleIcon from "@/components/icons/google"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"

export function UserAuthForm({
  className,
  ...props
}: ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <FieldGroup>
          <Field>
            <FieldLabel className="sr-only" htmlFor="email">
              Email
            </FieldLabel>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </Field>
          <Field>
            <FieldLabel className="sr-only" htmlFor="password">
              Password
            </FieldLabel>
            <Input
              id="password"
              placeholder="********"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
            />
          </Field>
          <Field>
            <Button disabled={isLoading}>
              {isLoading && <Spinner />}
              Sign In with Email
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldSeparator>Or continue with</FieldSeparator>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? <Spinner /> : <GoogleIcon className="mr-2 h-4 w-4" />}{" "}
        Google
      </Button>
    </div>
  )
}